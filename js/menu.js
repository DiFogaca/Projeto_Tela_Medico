// === ATUALIZAÇÃO DE DATA E HORA ===
function atualizarDataHora() {
  const agora = new Date();
  const formato = {
      weekday: 'long', 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric',
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit'
  };
  document.getElementById("dataHoraAtual").textContent = agora.toLocaleDateString('pt-BR', formato);
}

// Atualiza a data e hora a cada segundo
setInterval(atualizarDataHora, 1000);
atualizarDataHora();

// === FUNÇÃO PARA CARREGAR PÁGINAS DINÂMICAS E EXECUTAR O SCRIPT ===
function carregarPagina(pagina, titulo = "") {
  const conteudo = document.getElementById("conteudo");
  const tituloPagina = document.getElementById("tituloPagina");

  if (!conteudo || !tituloPagina) {
    console.error("Elementos principais não encontrados.");
    return;
  }

  fetch(`./pages/${pagina}.html`)
    .then((response) => {
      if (!response.ok) throw new Error(`Erro ${response.status}: Página não encontrada`);
      return response.text();
    })
    .then((html) => {

      if (typeof pararFetchData === "function") {
        pararFetchData();
    }
      // Carrega o conteúdo da página
      conteudo.innerHTML = html;
      if (titulo) tituloPagina.textContent = titulo;

      // Executa os scripts específicos da página
      executarScriptsDinamicos(conteudo);
    })
    .catch((error) => console.error("Erro ao carregar página:", error));
}

function executarScriptsDinamicos(container) {
  container.querySelectorAll("script").forEach((oldScript) => {
    let scriptExistente = document.querySelector(`script[src="${oldScript.src}"]`);
    if (scriptExistente) {
      scriptExistente.remove();
    }

    const newScript = document.createElement("script");

    if (oldScript.src) {
      newScript.src = oldScript.src;
      newScript.onload = () => {
        console.log(`${oldScript.src} carregado com sucesso`);

        // Executar a inicialização manualmente se for a página AtendimentoPaciente
        if (oldScript.src.includes("atendimentoPaciente.js")) {
          setTimeout(() => {
            if (typeof inicializarAtendimentoPaciente === "function") {
              inicializarAtendimentoPaciente();
            }
          }, 100);
        }
      };
    } else {
      newScript.textContent = oldScript.textContent;
    }

    document.body.appendChild(newScript);
  });
}


