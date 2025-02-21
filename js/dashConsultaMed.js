data = {
  medicosAtendendo: 2,
  paciente: {
    nome: "Teste Paciente",
    prioridade: "urgente", // Certifique-se de que este valor corresponde aos 5 níveis definidos
    entrada: "22/12/2025",
    dataNascimento: "29/04/1991",
    sexo: "masculino",
    nacionalidade: "brasileiro",
    naturalidade: "Porto Alegre",
    tempCorporal: 36.5,
    pressao: "12/8",
    oxigenacao: 98,
    peso: 75.3,
    alergias: ["Dipirona", "Amendoim"],
    medicamentos: ["Paracetamol", "Ibuprofeno"],
  },
  fila: [
    {
      senha: 101,
      tempoEspera: "00:10:00",
      prioridade: "não urgente",
    },
    {
      senha: 102,
      tempoEspera: "00:07:30",
      prioridade: "pouco urgente",
    },
    {
      senha: 103,
      tempoEspera: "00:05:15",
      prioridade: "urgente",
    },
    {
      senha: 104,
      tempoEspera: "00:02:45",
      prioridade: "muito urgente",
    },
    {
      senha: 105,
      tempoEspera: "00:01:00",
      prioridade: "emergência",
    },
  ],
};


prioridadeConfig = {
  "não urgente": { texto: "Não Urgente", cor: "#007bff" }, // Azul
  "pouco urgente": { texto: "Pouca Urgência", cor: "#28a745" }, // Verde
  "urgente": { texto: "Urgente", cor: "#ffc107" }, // Amarelo
  "muito urgente": { texto: "Muito Urgente", cor: "#fd7a00" }, // Laranja
  "emergência": { texto: "Emergência", cor: "#dc3545" } // Vermelho
};

async function fetchData() {
  try {
    // const response = await fetch("URL_DA_API"); // Substitua com sua API real
    // const data = await response.json();

    // Atualiza o número de médicos atendendo
    document.getElementById("medicosAtendendo").innerHTML = 
      `<strong>${data.medicosAtendendo}</strong>`;

    // Atualiza as informações do paciente
    document.getElementById("pacienteNome").innerHTML = 
      `<strong>${data.paciente.nome}</strong>`;

    const prioridade = data.paciente.prioridade.toLowerCase();
    const config = prioridadeConfig[prioridade] || prioridadeConfig["não urgente"];

    document.getElementById("pacientePrioridade").innerHTML = 
      `<strong style="color: ${config.cor}">${config.texto.toUpperCase()}</strong> - Entrada: <strong>${data.paciente.entrada}</strong>`;

    document.getElementById("pacienteDados").innerHTML = 
      `<strong>DN:</strong> ${data.paciente.dataNascimento} | 
      <strong>Sexo:</strong> ${data.paciente.sexo} | 
      <strong>Nacionalidade:</strong> ${data.paciente.nacionalidade} | 
      <strong>Naturalidade:</strong> ${data.paciente.naturalidade}`;

    document.getElementById("pacienteClinicos").innerHTML = 
      `<strong>Temp Corp:</strong> ${data.paciente.tempCorporal} | 
      <strong>Pressão Arterial:</strong> ${data.paciente.pressao} | 
      <strong>Oxigenação:</strong> ${data.paciente.oxigenacao} | 
      <strong>Peso:</strong> ${data.paciente.peso}`;

    document.getElementById("pacienteAlergias").innerHTML = 
      `<strong>Alergias:</strong> ${data.paciente.alergias.join(", ")}`;

    document.getElementById("pacienteMedicamentos").innerHTML = 
      `<strong>Medicamentos:</strong> ${data.paciente.medicamentos.join(", ")}`;

    // Atualiza a fila de atendimento
    data.fila.forEach((paciente, index) => {
      const filaItem = document.getElementById(`fila-${index}`);
      if (filaItem) {
        const filaNumero = document.getElementById(`fila-numero-${index}`);
        const filaEspera = document.getElementById(`fila-espera-${index}`);
        const filaStatus = filaItem.querySelector(".status");

        const filaConfig = prioridadeConfig[paciente.prioridade.toLowerCase()] || prioridadeConfig["não urgente"];

        filaNumero.innerHTML = `<strong>${paciente.senha}</strong>`;
        filaEspera.innerHTML = `<strong>Espera ${paciente.tempoEspera}</strong>`;
        filaStatus.innerHTML = `<strong>${filaConfig.texto}</strong>`;
        
        // Atualiza a cor da borda e do texto do item da fila
        filaItem.style.borderColor = filaConfig.cor;
        filaItem.style.color = filaConfig.cor;
        filaStatus.style.backgroundColor = filaConfig.cor;
      }
    });

  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
}


function irParaAtendimento() {
  carregarPagina("AtendimentoPaciente-Medico", "Atendimento Paciente");
}


// Variável para o intervalo

// Função para iniciar o intervalo de fetchData
function iniciarFetchData() {
    fetchInterval = setInterval(fetchData, 1000); // Ajuste o tempo conforme necessário
    console.log("fetchData iniciado...");
}

// Função para interromper o intervalo quando necessário
function pararFetchData() {
    if (fetchInterval) {
        clearInterval(fetchInterval);
        fetchInterval = null;
        console.log("fetchData interrompido!");
    }
}

// Função de inicialização da página Dashboard
function inicializarDashConsultaMed() {
    console.log("Inicializando dashConsultaMed.js...");

    // Verifica se a página de Dashboard está carregada
    if (!document.getElementById("dashConsulta")) {
        console.error("ERRO: Elementos do DOM ainda não carregaram.");
        return;
    }

    // Inicia a busca de dados
    iniciarFetchData();
}

// Adiciona o evento para quando o DOM estiver totalmente carregado
document.addEventListener("DOMContentLoaded", inicializarDashConsultaMed);

// Caso a página seja fechada ou alterada, interrompe o intervalo de fetchData
window.addEventListener("beforeunload", pararFetchData);

