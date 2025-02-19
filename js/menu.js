// === ATUALIZAÇÃO DE DATA E HORA ===
function atualizarDataHora() {
  const elementoDataHora = document.getElementById("dataHoraAtual");
  if (!elementoDataHora) return;

  const agora = new Date();
  const dataFormatada = agora.toLocaleDateString("pt-BR");
  const horaFormatada = agora.toLocaleTimeString("pt-BR");

  elementoDataHora.textContent = `${dataFormatada} ${horaFormatada}`;
}

// Atualiza a data e hora a cada segundo
setInterval(atualizarDataHora, 1000);
atualizarDataHora();

// === CARREGAMENTO DINÂMICO DE PÁGINAS ===
function carregarPagina(pagina, titulo) {
  const conteudo = document.getElementById("conteudo");
  const tituloPagina = document.getElementById("tituloPagina");

  if (!conteudo || !tituloPagina) {
    console.error("Elementos principais não encontrados.");
    return;
  }

  fetch(`./pages/${pagina}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Erro ${response.status}: Página não encontrada`);
      return response.text();
    })
    .then((html) => {
      conteudo.innerHTML = html;
      tituloPagina.textContent = titulo;
      executarScriptsDinamicos(conteudo);
    })
    .catch((error) => console.error("Erro ao carregar página:", error));
}

// === EXECUÇÃO DE SCRIPTS INTERNOS DAS PÁGINAS CARREGADAS ===
function executarScriptsDinamicos(container) {
  container.querySelectorAll("script").forEach((script) => {
    const novoScript = document.createElement("script");
    if (script.src) {
      novoScript.src = script.src;
    } else {
      novoScript.textContent = script.textContent;
    }
    document.body.appendChild(novoScript);
  });
}

function carregaConsultaMedica(page) {
  fetch(`/pages/${page}`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("conteudo").innerHTML = html;

      // Executa os scripts da nova página
      document
        .getElementById("conteudo")
        .querySelectorAll("script")
        .forEach((oldScript) => {
          const newScript = document.createElement("script");
          if (oldScript.src) {
            newScript.src = oldScript.src;
          }
          newScript.textContent = oldScript.textContent;
          document.body.appendChild(newScript);
        });
    })
    .catch((error) => console.error("Erro ao carregar a página:", error));
}
