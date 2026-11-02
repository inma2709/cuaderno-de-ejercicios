$root = Split-Path $PSScriptRoot -Parent
$sources = Join-Path $root 'materiales'
$originals = Join-Path $root 'materiales-originales'

# Conservamos una copia sin modificar antes de preparar los archivos de estudio.
if (-not (Test-Path $originals)) {
  Copy-Item -Recurse -Force $sources $originals
}

function Get-Guide([string]$content, [string]$path) {
  $ideas = New-Object System.Collections.Generic.List[string]
  if ($content -match '\blocalStorage\b') { $ideas.Add('Al iniciar, se recuperan los datos guardados y se actualiza el array. Al añadir un dato: push(), guardar en localStorage y volver a mostrar el listado.') }
  if ($content -match '\bJSON\.(stringify|parse)') { $ideas.Add('JSON.stringify convierte arrays u objetos en texto para guardarlos; JSON.parse recupera de nuevo su estructura.') }
  if ($content -match '\bfor\s*\(|\bfor\s*\(const') { $ideas.Add('Los bucles recorren los datos uno a uno. La variable declarada en cada vuelta representa el elemento actual.') }
  if ($content -match '\b(innerHTML|textContent)\b') { $ideas.Add('textContent escribe texto seguro; innerHTML se utiliza aquí para crear la estructura HTML dinámica del ejercicio.') }
  if ($content -match '\b(getElementById|querySelector)\b') { $ideas.Add('Primero se seleccionan los elementos del HTML; después las funciones cambian su contenido o leen sus valores.') }
  if ($content -match '\b(Number\()') { $ideas.Add('Los valores de los inputs son texto. Number() los convierte a número antes de calcular.') }
  if ($content -match '\b(push|find|filter)\b') { $ideas.Add('Los métodos de array se aplican sobre la colección: push añade, find localiza el primer resultado y filter crea una selección.') }
  if ($content -match '\breturn\b') { $ideas.Add('return entrega un resultado desde una función para utilizarlo donde se llamó.') }
  if ($ideas.Count -eq 0) { $ideas.Add('Lee el código de arriba abajo: se declaran los datos, se definen las funciones y al final se llama a la función que inicia la práctica.') }
  return ($ideas -join "`r`n * ")
}

$reviewed = 0
Get-ChildItem $sources -Recurse -File -Include *.js | ForEach-Object {
  $content = Get-Content -Raw $_.FullName
  if ([string]::IsNullOrWhiteSpace($content)) { return }
  if ($content -match 'REVISIÓN DIDÁCTICA') { return }
  $guide = Get-Guide $content $_.FullName
  $header = @"
/*
 * REVISIÓN DIDÁCTICA DEL CUADERNO
 *
 * Esta es la solución trabajada en clase, conservada con sus nombres originales.
 * Ideas clave de esta práctica:
 * $guide
 *
 * Estudia cada bloque, modifica un dato y observa qué parte de la página cambia.
 */

"@
  Set-Content -LiteralPath $_.FullName -Value ($header + $content) -Encoding utf8
  $reviewed++
}
Write-Output "JavaScript comentados: $reviewed"
