let chamados = [
  {
    nome: "CARLOS EDUARDO FERREIRA",
    doutor: "Mariana Souza",
    consultorio: 5,
    urgencia: 1,
    entrada: "14:10 - 22/12/2024",
    previsao_inicio: "14:15",
    previsao_limite: "14:50",
  },
  {
    nome: "GABRIELA COSTA",
    doutor: "Fernando Lopes",
    consultorio: 7,
    urgencia: 2,
    entrada: "14:25 - 22/12/2024",
    previsao_inicio: "14:30",
    previsao_limite: "15:00",
  },
  {
    nome: "RODRIGO ALMEIDA",
    doutor: "Camila Ribeiro",
    consultorio: 9,
    urgencia: 3,
    entrada: "14:40 - 22/12/2024",
    previsao_inicio: "14:45",
    previsao_limite: "15:20",
  },
  {
    nome: "JÚLIA RIBEIRO",
    doutor: "André Carvalho",
    consultorio: 15,
    urgencia: 4,
    entrada: "14:55 - 22/12/2024",
    previsao_inicio: "15:00",
    previsao_limite: "15:40",
  },
  {
    nome: "LUCAS MENEZES",
    doutor: "Patrícia Mendes",
    consultorio: 18,
    urgencia: 5,
    entrada: "15:10 - 22/12/2024",
    previsao_inicio: "15:15",
    previsao_limite: "15:50",
  },
  {
    nome: "ANA CLARA SANTOS",
    doutor: "Ricardo Borges",
    consultorio: 2,
    urgencia: 1,
    entrada: "15:25 - 22/12/2024",
    previsao_inicio: "15:30",
    previsao_limite: "16:10",
  },
];

let chamando = [
  {
    nome: "JOSÉ ANTÔNIO DA SILVA",
    doutor: "Manoel Balala",
    consultorio: 1,
    urgencia: 1,
    entrada: "13:20 - 22/12/2024",
    previsao_inicio: "13:00",
    previsao_limite: "13:40",
  },
];

const fila = [
  {
    id: "nao_urgente_cards",
    cards: [
      {
        nome: "CARLOS EDUARDO FERREIRA",
        urgencia: 1,
        entrada: "14:05 - 22/12/2024",
        previsao_inicio: "14:10",
        previsao_limite: "14:50",
      },
      {
        nome: "MARIA HELENA SOUZA",
        urgencia: 1,
        entrada: "14:15 - 22/12/2024",
        previsao_inicio: "14:20",
        previsao_limite: "15:00",
      },
    ],
  },
  {
    id: "pouco_urgente_cards",
    cards: [
      {
        nome: "GABRIELA COSTA",
        urgencia: 2,
        entrada: "14:30 - 22/12/2024",
        previsao_inicio: "14:35",
        previsao_limite: "15:10",
      },
      {
        nome: "RODRIGO ALMEIDA",
        urgencia: 2,
        entrada: "14:45 - 22/12/2024",
        previsao_inicio: "14:50",
        previsao_limite: "15:30",
      },
      {
        nome: "LUCAS MENEZES",
        urgencia: 2,
        entrada: "15:00 - 22/12/2024",
        previsao_inicio: "15:05",
        previsao_limite: "15:45",
      },
    ],
  },
  {
    id: "urgente_cards",
    cards: [
      {
        nome: "ANA CLARA SANTOS",
        urgencia: 3,
        entrada: "15:10 - 22/12/2024",
        previsao_inicio: "15:15",
        previsao_limite: "15:50",
      },
      {
        nome: "FERNANDO PEREIRA",
        urgencia: 3,
        entrada: "15:20 - 22/12/2024",
        previsao_inicio: "15:25",
        previsao_limite: "16:00",
      },
      {
        nome: "JÚLIA RIBEIRO",
        urgencia: 3,
        entrada: "15:30 - 22/12/2024",
        previsao_inicio: "15:35",
        previsao_limite: "16:10",
      },
      {
        nome: "ANDRÉ LIMA",
        urgencia: 3,
        entrada: "15:40 - 22/12/2024",
        previsao_inicio: "15:45",
        previsao_limite: "16:20",
      },
      {
        nome: "RENATA MOREIRA",
        urgencia: 3,
        entrada: "15:50 - 22/12/2024",
        previsao_inicio: "15:55",
        previsao_limite: "16:30",
      },
    ],
  },
  {
    id: "muito_urgente_cards",
    cards: [
      {
        nome: "MARCOS TEIXEIRA",
        urgencia: 4,
        entrada: "16:00 - 22/12/2024",
        previsao_inicio: "16:05",
        previsao_limite: "16:40",
      },
      {
        nome: "PATRÍCIA OLIVEIRA",
        urgencia: 4,
        entrada: "16:10 - 22/12/2024",
        previsao_inicio: "16:15",
        previsao_limite: "16:50",
      },
      {
        nome: "RAFAEL SOARES",
        urgencia: 4,
        entrada: "16:20 - 22/12/2024",
        previsao_inicio: "16:25",
        previsao_limite: "17:00",
      },
      {
        nome: "SILVIA MENDES",
        urgencia: 4,
        entrada: "16:30 - 22/12/2024",
        previsao_inicio: "16:35",
        previsao_limite: "17:10",
      },
      {
        nome: "FÁBIO CARVALHO",
        urgencia: 4,
        entrada: "16:40 - 22/12/2024",
        previsao_inicio: "16:45",
        previsao_limite: "17:20",
      },
      {
        nome: "TATIANA FREITAS",
        urgencia: 4,
        entrada: "16:50 - 22/12/2024",
        previsao_inicio: "16:55",
        previsao_limite: "17:30",
      },
      {
        nome: "RICARDO BORGES",
        urgencia: 4,
        entrada: "17:00 - 22/12/2024",
        previsao_inicio: "17:05",
        previsao_limite: "17:40",
      },
      {
        nome: "MONIQUE CASTRO",
        urgencia: 4,
        entrada: "17:10 - 22/12/2024",
        previsao_inicio: "17:15",
        previsao_limite: "17:50",
      },
    ],
  },
  {
    id: "emergencia_cards",
    cards: [
      {
        nome: "JONAS VIEIRA",
        urgencia: 5,
        entrada: "17:20 - 22/12/2024",
        previsao_inicio: "17:25",
        previsao_limite: "18:00",
      },
    ],
  },
];

function tocarSom() {
  const audio = new Audio("../assets/bell-sound.mp3");
  audio.play();
}

function toggleTheme() {
  const tagTema = document.querySelector('link[data-theme="theme"]');
  const menuIcon = document.getElementById("menuIcon");
  const themeButton = document.getElementById("theme_dark");

  if (tagTema.href.includes("Light")) {
    tagTema.href = "../css/themeDark.css";
    menuIcon.classList.add("dark");
    themeButton.classList.add("active");
  } else {
    tagTema.href = "../css/themeLight.css";
    menuIcon.classList.remove("dark");
    themeButton.classList.remove("active");
  }
}
const userLogged = JSON.parse(localStorage.getItem("usuarioLogado"));

if (userLogged.usuario === "admin") {
  function renderCards(destination, data) {
    const destinationDiv = document.getElementById(destination);
    renderizarCards(destination, destinationDiv, data);
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function escolheProximoPaciente(array) {
  if (array.length === 0) {
    console.log("O array está vazio.");
    return null;
  }
  return array.shift(); // Remove e retorna o primeiro item do array
}

function encontrarFilaComItens(fila) {
  let filaSelecionada;

  do {
    filaSelecionada = randomIntFromInterval(1, fila.length);
  } while (fila[filaSelecionada - 1].cards.length < 1);

  return filaSelecionada;
}

function renderFilas() {
  fila.map((colunaFila) => {
    renderCards(colunaFila.id, colunaFila.cards);
  });
}

function renderizarCards(destination, div, data) {
  div.innerHTML = div.innerHTML
    .split("\n")
    .filter((line) => !line.includes('class="card"'))
    .join("\n");

  data.forEach((item) => {
    const card = document.createElement("div");
    let urgencyName = "";
    switch (item.urgencia) {
      case 2:
        urgencyName = "Pouco Urgente";
        break;
      case 3:
        urgencyName = "Urgente";
        break;
      case 4:
        urgencyName = "Muito Urgente";
        break;
      case 5:
        urgencyName = "Emergência";
        break;
      default:
        urgencyName = "Não Urgente";
        break;
    }

    card.classList.add("card");
    card.innerHTML = `
        <p class="${destination === "card_chamando" ? "title" : "subtitle"}">${
      item.nome
    }</p>
    
    ${item.doutor ? `<p>Doutor: ${item.doutor}</p>` : ""}
    ${item.consultorio ? `<p>Consultório: ${item.consultorio}</p>` : ""}
        
        <p>Entrada: ${item.entrada}</p>
        <p class="priority_line">Urgência: ${urgencyName} <span class="bg_${
      item.urgencia
    }_light"></span></p>
      <p>Previsão: ${item.previsao_inicio} - ${item.previsao_limite}</p>
    `;

    div.appendChild(card);
  });
}

function limpaCards() {
  document.getElementById("nao_urgente_cards").innerHTML = "";
  document.getElementById("pouco_urgente_cards").innerHTML = "";
  document.getElementById("urgente_cards").innerHTML = "";
  document.getElementById("muito_urgente_cards").innerHTML = "";
  document.getElementById("emergencia_cards").innerHTML = "";
  document.getElementById("card_chamando").innerHTML = "";
  document.getElementById("ultimos_cards_chamados").innerHTML = "";
}

function chamandoPaciente(paciente) {
  chamando = [paciente];
  renderCards("card_chamando", chamando);
}

function historicoPacientesChamados() {
  chamados.unshift(chamando[0]);
  renderCards("ultimos_cards_chamados", chamados);
}

function updateChamadaPaciente(paciente) {
  historicoPacientesChamados();
  chamandoPaciente(paciente);
}

function chamarPaciente() {
  let filaSelecionada = encontrarFilaComItens(fila);
  const pacienteSelecionado = escolheProximoPaciente(
    fila[filaSelecionada - 1].cards
  );
  tocarSom();
  limpaCards();
  updateChamadaPaciente(pacienteSelecionado);
  renderFilas();
}

document.addEventListener("DOMContentLoaded", function () {
  renderCards("ultimos_cards_chamados", chamados);
  renderCards("card_chamando", chamando);
  renderFilas();
});

setInterval(chamarPaciente, 12000);
setInterval(atualizarDataHora, 1000);
atualizarDataHora();
