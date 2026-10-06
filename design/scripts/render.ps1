# render.ps1: render one section of a design spec with Codex (one image generation) into design/mockups.
# Same call as the Genomlyst pipeline: Codex reads the spec and passes the 'Shared' section followed by
# the named section verbatim to its built-in image tool. With -Edit, the first -Refs image is edited and
# only the named section is passed.
#
#   .\design\scripts\render.ps1 -Spec design/specs/hero-r1.md -Key a-workbench -Refs a.png, b.png, c.png
#   .\design\scripts\render.ps1 -Spec design/specs/hero-r1.md -Key a2-blue -Refs design/mockups/hero-r1-a-workbench.png -Edit
param(
  [Parameter(Mandatory)][string]$Spec,
  [Parameter(Mandatory)][string]$Key,
  [string[]]$Refs = @(),
  [switch]$Edit,
  [string]$Size = "1536x1024",
  [string]$Model,
  [string]$Out
)
$ErrorActionPreference = "Stop"
if (-not $Out) { $Out = "$([IO.Path]::GetFileNameWithoutExtension($Spec))-$Key" }

if ($Edit) {
  $how = "editing the first attached image"
  $pass = "Pass the whole '## $Key' section verbatim as the image prompt."
} else {
  $how = "with the attached images as references in the order the spec's references list gives"
  $pass = "Pass the whole '## Shared' section followed by the whole '## $Key' section verbatim as the image prompt."
}
$prompt = "Read $Spec. Use your built-in image generation tool exactly once, at $Size, $how, to render '$Key'. $pass Do not write code and do not edit files."

# The prompt must come before -i: -i takes several values, so a prompt after it is read as an image path.
$codexArgs = @("exec", "-s", "workspace-write")
if ($Model) { $codexArgs += @("-m", $Model) }
$codexArgs += $prompt
foreach ($r in $Refs) {
  if (-not (Test-Path $r)) { throw "Reference not found: $r" }
  $codexArgs += @("-i", $r)
}

$log = Join-Path $env:TEMP "codex-$Out.log"
Write-Host "Rendering $Out (log: $log)"
# Piping $null closes stdin so codex never waits on it. Codex logs progress on stderr, which Windows
# PowerShell turns into errors, so Stop is lifted for the call.
$ErrorActionPreference = "Continue"
$null | & codex @codexArgs *> $log
$ErrorActionPreference = "Stop"

# Codex saves the image under <codex home>/generated_images/<session id>/; the log names the session.
$sid = (Select-String -Path $log -Pattern '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}' |
  Select-Object -First 1).Matches.Value
if (-not $sid) { throw "No session id in $log" }
$codexHome = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $HOME ".codex" }
$img = Get-ChildItem (Join-Path $codexHome "generated_images\$sid") -Filter *.png -ErrorAction SilentlyContinue |
  Sort-Object LastWriteTime -Descending | Select-Object -First 1
if (-not $img) { throw "No image for session $sid; see $log" }

New-Item -ItemType Directory -Force design/mockups | Out-Null
$dest = "design/mockups/$Out.png"
Copy-Item $img.FullName $dest -Force
Write-Host $dest
