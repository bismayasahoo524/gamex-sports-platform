Write-Host "========================================="
Write-Host "GameX SCA Security Scan"
Write-Host "========================================="

$requirements = Get-ChildItem -Path . -Recurse -Filter requirements.txt

if ($requirements.Count -eq 0) {
    Write-Host "No requirements.txt files found."
}
else {
    foreach ($file in $requirements) {
        Write-Host ""
        Write-Host "Scanning: $($file.FullName)"
        Write-Host "-----------------------------------------"

        pip-audit -r $file.FullName

        if ($LASTEXITCODE -ne 0) {
            Write-Host "pip-audit found vulnerabilities."
            exit 1
        }
    }
}

Write-Host ""
Write-Host "Running Trivy filesystem scan..."
Write-Host "-----------------------------------------"

docker run --rm `
    -v "${PWD}:/src" `
    aquasec/trivy:latest `
    fs `
    --severity HIGH,CRITICAL `
    --exit-code 1 `
    /src

if ($LASTEXITCODE -ne 0) {
    Write-Host "Trivy found HIGH/CRITICAL vulnerabilities."
    exit 1
}

Write-Host ""
Write-Host "========================================="
Write-Host "SCA PASSED"
Write-Host "========================================="