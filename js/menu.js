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

  fetch(`./pages/${pagina}`)
    .then((response) => {
      if (!response.ok) throw new Error(`Erro ${response.status}: Página não encontrada`);
      return response.text();
    })
    .then((html) => {
      conteudo.innerHTML = html;
      if (titulo) tituloPagina.textContent = titulo;
      executarScriptsDinamicos(conteudo);
    })
    .catch((error) => console.error("Erro ao carregar página:", error));
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
  });
}