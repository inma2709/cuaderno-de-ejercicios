const parameters = new URLSearchParams(location.search);
const blockIndex = Number(parameters.get("b"));
const exerciseIndex = Number(parameters.get("e"));
const block = window.blocks[blockIndex];
const exercise = block && block.exercises[exerciseIndex];
const sourceRoots = { avante: "materiales/js-clases-avante/", curso: "materiales/javascript/" };
const tabs = document.querySelector("#file-tabs");
const code = document.querySelector("#code");
const fileName = document.querySelector("#file-name");
let files = [];

function escapeCode(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function showFile(index) {
  const file = files[index];
  fileName.textContent = file.name;
  code.innerHTML = escapeCode(file.content);
  tabs.querySelectorAll("button").forEach((button, position) => button.classList.toggle("active", position === index));
  document.querySelector("#copy").onclick = async () => {
    const button = document.querySelector("#copy");
    try {
      // Clipboard API requiere un contexto seguro; GitHub Pages lo proporciona.
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(file.content);
      } else {
        // Respaldo para el uso local mediante file://.
        const area = document.createElement("textarea");
        area.value = file.content;
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
      }
      button.textContent = "Copiado";
    } catch (error) {
      button.textContent = "No se pudo copiar";
    }
  };
}

async function readText(url, sourceKey) {
  // fetch funciona cuando se publica (por ejemplo, en GitHub Pages).
  // La copia embebida permite abrir el cuaderno localmente sin un servidor.
  try {
    const response = await fetch(url);
    if (response.ok) return await response.text();
  } catch (error) {
    // Al abrir con file:// el navegador puede bloquear fetch; usamos el respaldo local.
  }
  return window.sourceCode && window.sourceCode[sourceKey];
}

async function loadFile(url, name, sourceKey = url) {
  const content = await readText(url, sourceKey);
  if (typeof content !== "string") return;
  files.push({ name, content });
}

async function init() {
  if (!exercise) {
    document.querySelector("#title").textContent = "Práctica no encontrada";
    return;
  }
  const [title, origin, concepts, level, path, note] = exercise;
  const root = origin.startsWith("MF0491") ? sourceRoots.avante : sourceRoots.curso;
  const htmlUrl = root + path;
  // Se asigna antes de cargar el código: la descarga no depende del modo de apertura.
  document.querySelector("#download").href = `descargas/b${blockIndex + 1}-e${exerciseIndex + 1}.zip`;
  document.title = `${title} · Cuaderno de JavaScript`;
  document.querySelector("#title").textContent = title;
  document.querySelector("#details").innerHTML = `<p class="tag">${level}</p><p><strong>Conceptos practicados:</strong> ${concepts}</p><p><strong>Enunciado y contexto:</strong> ${note || "Consulta el código y ejecútalo para repasar la práctica realizada en clase."}</p><p><a href="${htmlUrl}" target="_blank" rel="noopener">Abrir la práctica ejecutable</a></p>`;
  await loadFile(htmlUrl, "index.html");
  const html = files[0] && files[0].content;
  if (html) {
    const cssMatches = [...html.matchAll(/<link[^>]+href=["']([^"']+\.css)["']/gi)];
    const jsMatches = [...html.matchAll(/<script[^>]+src=["']([^"']+\.js)["']/gi)];
    // Convertimos cada ruta relativa del HTML en una ruta válida dentro del repositorio.
    const baseUrl = new URL(htmlUrl, location.href);
    const localBase = new URL(htmlUrl, "https://cuaderno.local/");
    for (const match of cssMatches) {
      const key = new URL(match[1], localBase).pathname.slice(1);
      await loadFile(new URL(match[1], baseUrl).href, "styles.css", key);
    }
    for (const match of jsMatches) {
      const key = new URL(match[1], localBase).pathname.slice(1);
      await loadFile(new URL(match[1], baseUrl).href, "app.js", key);
    }
  }
  if (!files.length) {
    document.querySelector("#file-help").textContent = "No se ha podido cargar el archivo. Abre la práctica original desde el índice.";
    return;
  }
  files.forEach((file, index) => tabs.insertAdjacentHTML("beforeend", `<button type="button" role="tab">${file.name}</button>`));
  tabs.querySelectorAll("button").forEach((button, index) => button.addEventListener("click", () => showFile(index)));
  showFile(0);
  // Las actividades con plantilla conservan app.js como punto de partida. Si existe
  // una página de solución, se ofrece cerrada para animar al alumno a intentarlo antes.
  const solutionUrl = htmlUrl.replace(/[^/]+$/, "solucion.html");
  const solutionHtml = await readText(solutionUrl, solutionUrl);
  if (solutionHtml) {
    const match = solutionHtml.match(/<script[^>]+src=["']([^"']+\.js)["']/i);
    if (match) {
      const solutionKey = new URL(match[1], new URL(solutionUrl, "https://cuaderno.local/")).pathname.slice(1);
      const solutionText = await readText(new URL(match[1], new URL(solutionUrl, location.href)).href, solutionKey);
      if (solutionText) {
        document.querySelector("#details").insertAdjacentHTML("beforeend", `<details class="solution"><summary>Ver solución comentada</summary><p>La plantilla se mantiene intacta; este código resuelve la actividad.</p><pre><code>${escapeCode(solutionText)}</code></pre></details>`);
      }
    }
  }
}

init();
