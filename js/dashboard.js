const chamados = [
  {
    nome: "JOSÉ ANTÔNIO DA SILVA",
    doutor: "Manoel Balala",
    consultorio: 3,
    urgencia: 1,
    entrada: "13:20 - 22/12/2024",
    previsao_inicio: "13:00",
    previsao_limite: "13:40",
  },
  {
    nome: "JOSÉ ANTÔNIO DA SILVA",
    doutor: "Manoel Balala",
    consultorio: 2,
    urgencia: 2,
    entrada: "13:20 - 22/12/2024",
    previsao_inicio: "13:00",
    previsao_limite: "13:40",
  },
  {
    nome: "JOSÉ ANTÔNIO DA SILVA",
    doutor: "Manoel Balala",
    consultorio: 3,
    urgencia: 3,
    entrada: "13:20 - 22/12/2024",
    previsao_inicio: "13:00",
    previsao_limite: "13:40",
  },
  {
    nome: "JOSÉ ANTÔNIO DA SILVA",
    doutor: "Manoela Balala",
    consultorio: 22,
    urgencia: 4,
    entrada: "13:20 - 22/12/2024",
    previsao_inicio: "13:00",
    previsao_limite: "13:40",
  },
  {
    nome: "JOSÉ ANTÔNIO DA SILVA",
    doutor: "Manoel Balala",
    consultorio: 12,
    urgencia: 5,
    entrada: "13:20 - 22/12/2024",
    previsao_inicio: "13:00",
    previsao_limite: "13:40",
  },
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
const chamando = [
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
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 1,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 1,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
    ],
  },
  {
    id: "pouco_urgente_cards",
    cards: [
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 2,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 2,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 2,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
    ],
  },
  {
    id: "urgente_cards",
    cards: [
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 3,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 3,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 3,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 3,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 3,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
    ],
  },
  {
    id: "muito_urgente_cards",
    cards: [
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 4,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 4,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 4,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 4,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 4,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 4,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 4,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 4,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
    ],
  },
  {
    id: "emergencia_cards",
    cards: [
      {
        nome: "JOSÉ ANTÔNIO DA SILVA",
        urgencia: 5,
        entrada: "13:20 - 22/12/2024",
        previsao_inicio: "13:00",
        previsao_limite: "13:40",
      },
    ],
  },
];

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

function renderCards(destination, data) {
  const destinationDiv = document.getElementById(destination);

  // Remove apenas os cards antigos, sem apagar a classe do container
  destinationDiv.innerHTML = destinationDiv.innerHTML
    .split("\n")
    .filter((line) => !line.includes('class="card"')) // Remove apenas os cards
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
        urgencyName = "Pouco Urgente";
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

    destinationDiv.appendChild(card);
  });
}

function renderFilas() {
  fila.map((colunaFila) => {
    renderCards(colunaFila.id, colunaFila.cards);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderCards("ultimos_cards_chamados", chamados);
  renderCards("card_chamando", chamando);
  renderFilas();
});
