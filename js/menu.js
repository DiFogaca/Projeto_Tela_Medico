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

// === FUNÇÃO GERAL PARA CARREGAMENTO DINÂMICO ===
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
      conteudo.innerHTML = html;
      if (titulo) tituloPagina.textContent = titulo;

      // Carregar arquivos CSS e JS específicos para a página carregada
      carregarCss(pagina);
      carregarScripts(pagina, conteudo);
    })
    .catch((error) => console.error("Erro ao carregar página:", error));
}

// === CARREGAR ARQUIVOS CSS ESPECÍFICOS PARA A PÁGINA ===
function carregarCss(pagina) {
  const cssMap = {
    'DashboardConsultaMedica': './css/dashboardMed.css',
    'AtendimentoPaciente-Medico': './css/atendimentoPaciente.css',
    // Adicione outros arquivos CSS conforme necessário
  };

  const cssArquivo = cssMap[pagina];
  if (cssArquivo) {
    const linkExistente = document.querySelector(`link[href="${cssArquivo}"]`);
    if (!linkExistente) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssArquivo;
      document.head.appendChild(link);
    }
  }
}

// === CARREGAR E EXECUTAR OS SCRIPTS ESPECÍFICOS PARA A PÁGINA ===
function carregarScripts(pagina, container) {
  const jsMap = {
    'DashboardConsultaMedica': './js/dashConsultaMed.js',
    'AtendimentoPaciente-Medico': './js/atendimentoPaciente.js',
    // Adicione outros arquivos JS conforme necessário
  };

  const jsArquivo = jsMap[pagina];
  if (jsArquivo) {
    const scriptExistente = document.querySelector(`script[src="${jsArquivo}"]`);
    if (!scriptExistente) {
      const script = document.createElement("script");
      script.src = jsArquivo;
      script.onload = () => executarScriptsDinamicos(container); // Executa scripts internos após carregar o JS
      document.body.appendChild(script);
    } else {
      // Se o script já estiver carregado, apenas executar os scripts internos
      executarScriptsDinamicos(container);
    }
  }
}

// === EXECUÇÃO DE SCRIPTS INTERNOS DAS PÁGINAS CARREGADAS ===
function executarScriptsDinamicos(container) {
  container.querySelectorAll("script").forEach((oldScript) => {
    const newScript = document.createElement("script");
    if (oldScript.src) {
      newScript.src = oldScript.src;
    } else {
      newScript.textContent = oldScript.textContent;
    }
    document.body.appendChild(newScript);
    oldScript.remove();
  });
}