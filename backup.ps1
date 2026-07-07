# backup.ps1 -- deutsch-weg daily git backup: add -> commit -> push
# Scheduled task: DeutschWeg_Backup (daily 03:10, runs as current user)
# Static site, no PII, no encryption step needed (contrast: intel-pusher backup.sh).
# Success/failure judged by git push exit code, NOT by output presence
# (git push writes ref updates to stderr even on success).
# logs/ is gitignored to avoid a log-write -> commit -> push feedback loop.
# ASCII-only strings per governance (PS 5.1 encoding safety).

$ErrorActionPreference = 'Continue'
$repo = 'C:\Projects\deutsch-weg-repo'
$logDir = Join-Path $repo 'logs'
if (-not (Test-Path $logDir)) { New-Item -ItemType Directory -Path $logDir | Out-Null }
$log = Join-Path $logDir 'backup.log'
$errLog = Join-Path $logDir 'backup_errors.log'

Set-Location $repo
$ts = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'

git add -A 2>&1 | Out-Null
# commit exits nonzero when there is nothing to commit; that is expected on
# no-change days and must not abort the script (push still verifies remote).
git commit -m "auto backup $ts" 2>&1 | Out-Null

$pushOutput = (git push origin main 2>&1 | Out-String).Trim()
$pushExit = $LASTEXITCODE
$sha = git rev-parse --short HEAD 2>$null
if ($null -eq $sha) { $sha = 'unknown' }

if ($pushExit -eq 0) {
    Add-Content -Path $log -Value "[$ts] OK commit=$sha"
} else {
    Add-Content -Path $log -Value "[$ts] FAIL commit=$sha"
    Add-Content -Path $errLog -Value "[$ts] FAIL commit=$sha"
    Add-Content -Path $errLog -Value $pushOutput
    exit 1
}
