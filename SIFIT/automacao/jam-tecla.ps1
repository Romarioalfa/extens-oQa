# Aperta um atalho do Jam SOMENTE na janela do Chromium do Playwright (pasta ms-playwright).
# Nunca toca no Chrome pessoal: a janela e escolhida pelo processo, nao pelo titulo.
# Uso: powershell -File jam-tecla.ps1 [video|replay|list]
param([string]$acao = "video")
Add-Type @"
using System; using System.Text; using System.Collections.Generic; using System.Runtime.InteropServices;
public class W {
  public delegate bool CB(IntPtr h, IntPtr p);
  [DllImport("user32.dll")] static extern bool EnumWindows(CB cb, IntPtr p);
  [DllImport("user32.dll")] static extern int GetWindowText(IntPtr h, StringBuilder s, int n);
  [DllImport("user32.dll")] static extern bool IsWindowVisible(IntPtr h);
  [DllImport("user32.dll")] static extern uint GetWindowThreadProcessId(IntPtr h, out uint pid);
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int c);
  [DllImport("user32.dll")] public static extern IntPtr GetForegroundWindow();
  [DllImport("user32.dll")] public static extern void keybd_event(byte k, byte s, uint f, UIntPtr e);
  [DllImport("user32.dll")] public static extern bool BringWindowToTop(IntPtr h);
  [DllImport("user32.dll")] public static extern bool AttachThreadInput(uint a, uint b, bool f);
  [DllImport("kernel32.dll")] public static extern uint GetCurrentThreadId();
  [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr h, IntPtr p);
  public static bool Forcar(IntPtr h) {
    IntPtr fg = GetForegroundWindow();
    uint t1 = GetWindowThreadProcessId(fg, IntPtr.Zero), t2 = GetCurrentThreadId();
    AttachThreadInput(t2, t1, true);
    ShowWindow(h, 3); BringWindowToTop(h); SetForegroundWindow(h);
    AttachThreadInput(t2, t1, false);
    return GetForegroundWindow() == h;
  }
  public static List<KeyValuePair<IntPtr,string>> Janelas(HashSet<uint> pids) {
    var r = new List<KeyValuePair<IntPtr,string>>();
    EnumWindows((h, p) => { uint pid; GetWindowThreadProcessId(h, out pid);
      if (IsWindowVisible(h) && pids.Contains(pid)) { var s = new StringBuilder(512); GetWindowText(h, s, 512);
        if (s.Length > 0) r.Add(new KeyValuePair<IntPtr,string>(h, s.ToString())); } return true; }, IntPtr.Zero);
    return r;
  }
}
"@
$pids = New-Object 'System.Collections.Generic.HashSet[uint32]'
Get-Process chrome -ErrorAction SilentlyContinue | Where-Object { $_.Path -like "*ms-playwright*" } | ForEach-Object { [void]$pids.Add([uint32]$_.Id) }
$js = [W]::Janelas($pids)
if ($acao -eq "list") { $js | ForEach-Object { $_.Value }; exit 0 }
if ($js.Count -ne 1) { Write-Output "ERRO: esperava 1 janela do Chromium do Playwright, achei $($js.Count)"; $js | ForEach-Object { " - " + $_.Value }; exit 1 }
$h = $js[0].Key
$ok = $false
for ($i = 0; $i -lt 6 -and -not $ok; $i++) {
  [W]::keybd_event(0x12, 0, 0, [UIntPtr]::Zero); [W]::keybd_event(0x12, 0, 2, [UIntPtr]::Zero)  # Alt libera o foco
  $ok = [W]::Forcar($h)
  Start-Sleep -Milliseconds 400
  $ok = ([W]::GetForegroundWindow() -eq $h)
}
if (-not $ok) { Write-Output "ERRO: janela do Playwright nao ficou em primeiro plano; tecla NAO enviada"; exit 1 }
$tecla = if ($acao -eq "replay") { 0x58 } else { 0x20 }  # X ou Space
[W]::keybd_event(0x11, 0, 0, [UIntPtr]::Zero); [W]::keybd_event(0x10, 0, 0, [UIntPtr]::Zero)
[W]::keybd_event($tecla, 0, 0, [UIntPtr]::Zero); Start-Sleep -Milliseconds 60
[W]::keybd_event($tecla, 0, 2, [UIntPtr]::Zero)
[W]::keybd_event(0x10, 0, 2, [UIntPtr]::Zero); [W]::keybd_event(0x11, 0, 2, [UIntPtr]::Zero)
Write-Output "OK: $acao -> '$($js[0].Value)'"
