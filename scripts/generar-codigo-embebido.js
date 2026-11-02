// Genera una copia de solo lectura del código de los materiales para que el visor
// funcione incluso si se abre index.html directamente desde el explorador de archivos.
const fs = require("fs");
const path = require("path");

const project = path.resolve(__dirname, "..");
const materials = path.join(project, "materiales");
const code = {};

function visit(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) visit(fullPath);
    else if (/\.(html|css|js)$/i.test(entry.name)) {
      const relative = path.relative(project, fullPath).replaceAll("\\", "/");
      code[relative] = fs.readFileSync(fullPath, "utf8");
    }
  }
}

visit(materials);
fs.writeFileSync(
  path.join(project, "assets", "source-code.js"),
  `/* Código embebido para consulta local. Generado por scripts/generar-codigo-embebido.js */\nwindow.sourceCode = ${JSON.stringify(code)};\n`,
  "utf8"
);
console.log(`Archivos embebidos: ${Object.keys(code).length}`);
