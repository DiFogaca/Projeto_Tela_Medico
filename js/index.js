// === ATUALIZAÇÃO DE DATA E HORA ===
function atualizarDataHora() {
  const agora = new Date();
  const formatoData = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const formatoTempo = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const dataAtual = document.getElementById("data_atual");
  const horaAtual = document.getElementById("hora_atual");

  dataAtual.textContent = agora.toLocaleDateString("pt-BR", formatoData);
  horaAtual.textContent = agora
    .toLocaleDateString("pt-BR", formatoTempo)
    .split(",")[1];
}

// Atualiza a data e hora a cada segundo
setInterval(atualizarDataHora, 1000);
atualizarDataHora();

// === FUNÇÃO PARA CARREGAR PÁGINAS DINÂMICAS E EXECUTAR O SCRIPT ===
function carregarPagina(pagina, titulo = "") {
  const conteudo = document.getElementById("conteudo");

  if (!conteudo) {
    console.error("Elementos principais não encontrados.");
    return;
  }

  fetch(`./pages/${pagina}.html`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Erro ${response.status}: Página não encontrada`);
      return response.text();
    })
    .then((html) => {
      if (typeof pararFetchData === "function") {
        pararFetchData();
      }
      // Carrega o conteúdo da página
      conteudo.innerHTML = html;

      // Executa os scripts específicos da página
      executarScriptsDinamicos(conteudo);
    })
    .catch((error) => console.error("Erro ao carregar página:", error));
}

function executarScriptsDinamicos(container) {
  container.querySelectorAll("script").forEach((oldScript) => {
    let scriptExistente = document.querySelector(
      `script[src="${oldScript.src}"]`
    );
    if (scriptExistente) {
      scriptExistente.remove();
    }

    const newScript = document.createElement("script");

    if (oldScript.src) {
      newScript.src = oldScript.src;
      newScript.onload = () => {
        console.log(`${oldScript.src} carregado com sucesso`);

        // Extrair o nome do arquivo e criar o nome da função dinamicamente
        const scriptName = oldScript.src.split("/").pop().split(".")[0]; // Exemplo: 'fiveserver.js' -> 'fiveserver'
        const initFunctionName = `inicializar${
          scriptName.charAt(0).toUpperCase() + scriptName.slice(1)
        }`; // 'inicializarFiveserver'

        // Verificar se a função de inicialização existe e executá-la
        if (typeof window[initFunctionName] === "function") {
          setTimeout(() => {
            window[initFunctionName](); // Chama a função de inicialização correspondente
          }, 100);
        } else {
          console.warn(
            `Função de inicialização ${initFunctionName} não encontrada.`
          );
        }
      };
    } else {
      newScript.textContent = oldScript.textContent;
    }

    document.body.appendChild(newScript);
  });
}

function logout(e) {
  e.preventDefault();
  localStorage.removeItem("usuarioLogado");
  window.location.href = "pages/login/login.html";
}

function validator() {
  const isUserAuthenticated = !!localStorage.getItem("usuarioLogado");
  if (!isUserAuthenticated) {
    window.location.href = "pages/login/login.html";
  }
}

function exibirMenuCorreto() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  if (!usuarioLogado) return;

  const usuario = JSON.parse(usuarioLogado);
  if (!usuario || !usuario.tipo) return;

  const tipoUsuario = usuario.tipo;
  const menuItens = document.querySelectorAll(".nav-item");

  menuItens.forEach((item) => {
    if (item) {
      const dataMenu = item.getAttribute("data-page");
      if (tipoUsuario === "ADMIN") {
        item.classList.add("ativo");
      } else {
        let menuParaAtivar = "";
        switch (tipoUsuario) {
          case "MEDICO":
            if (dataMenu === "medico") {
              menuParaAtivar = "medico";
            }
            break;
          case "ENFERMEIRO":
            if (dataMenu === "triagem") {
              menuParaAtivar = "triagem";
            }
            break;
          case "RECEPCAO":
            if (dataMenu === "recepcao") {
              menuParaAtivar = "recepcao";
            }
            break;
          default:
            break;
        }
        if (!!menuParaAtivar) {
          document
            .querySelector(`li[data-page=${menuParaAtivar}]`)
            .classList.add("ativo");
        }
      }
    }
  });
}

window.onload = function () {
  exibirMenuCorreto();
  validator();
};
