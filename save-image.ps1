Add-Type -AssemblyName System.Windows.Forms
$img = [System.Windows.Forms.Clipboard]::GetImage()
if ($null -ne $img) {
    $img.Save('c:\Users\pgran\Desktop\mano-projektai\picerija-template\public\images\hero-pizza.jpg')
    Write-Host 'Image saved successfully'
} else {
    Write-Host 'No image found in clipboard'
}
