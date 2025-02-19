const data = {
  medicosAtendendo: 2,
  paciente: {
    nome: "teste",
    prioridade: "urgente",
    entrada: "22/12/2025",
    dataNascimento: "29/04/1991",
    sexo: "masculino",
    nacionalidade: "brasileiro",
    naturalidade: "porto alegre",
    tempCorporal: 32,
    pressao: "12/8",
    oxigenacao: 99,
    peso: 92.4,
    alergias: ["teste", "alergia 2", "alergia 3"],
    medicamentos: ["med 1", "med 2", "med 3", "med 4"],
  },
  fila: [
    {
      senha: 1,
      tempoEspera: 900,
    },
  ],
};
async function fetchData() {
  try {
    // const response = await fetch("URL_DA_API"); // Substitua com sua API real
    // const data = await response.json();

    // Atualiza o número de médicos atendendo
    document.getElementById("medicosAtendendo").textContent =
      data.medicosAtendendo;

    // Atualiza as informações do paciente
    document.getElementById("pacienteNome").textContent = data.paciente.nome;
    document.getElementById(
      "pacientePrioridade"
    ).innerHTML = `<strong>${data.paciente.prioridade}</strong> - Entrada: ${data.paciente.entrada}`;
    document.getElementById(
      "pacienteDados"
    ).textContent = `DN: ${data.paciente.dataNascimento} | Sexo: ${data.paciente.sexo} | Nacionalidade: ${data.paciente.nacionalidade} | Naturalidade: ${data.paciente.naturalidade}`;
    document.getElementById(
      "pacienteClinicos"
    ).textContent = `Temp Corp: ${data.paciente.tempCorporal} | Pressão Arterial: ${data.paciente.pressao} | Oxigenação: ${data.paciente.oxigenacao} | Peso: ${data.paciente.peso}`;
    document.getElementById(
      "pacienteAlergias"
    ).innerHTML = `<strong>Alergias:</strong> ${data.paciente.alergias.join(
      ", "
    )}`;
    document.getElementById(
      "pacienteMedicamentos"
    ).innerHTML = `<strong>Medicamentos:</strong> ${data.paciente.medicamentos.join(
      ", "
    )}`;

    // Atualiza apenas os números e o tempo de espera da fila
    data.fila.forEach((paciente, index) => {
      const filaItem = document.getElementById(`fila-${index}`);
      if (filaItem) {
        filaItem.querySelector(".display-4").textContent = paciente.senha;
        filaItem.querySelector(
          ".time"
        ).textContent = `Espera ${paciente.tempoEspera}`;
      }
    });
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
}

function atualizarDataHora() {
  const elementoDataHora = document.getElementById("dataHoraAtual");
  if (!elementoDataHora) return;

  const agora = new Date();
  const dataFormatada = agora.toLocaleDateString("pt-BR");
  const horaFormatada = agora.toLocaleTimeString("pt-BR");

  elementoDataHora.textContent = `${dataFormatada} ${horaFormatada}`;
}

function irParaAtendimento() {
  carregarPagina("AtendimentoPaciente-Medico.html", "Atendimento Paciente");
}

// Atualiza a data e a hora a cada segundo
setInterval(atualizarDataHora, 1000);

// Executa a função imediatamente ao carregar a página
atualizarDataHora();

// Chama a função ao carregar a página e define um intervalo para atualizar os dados a cada 5 segundos
fetchData();
setInterval(fetchData, 5000);
