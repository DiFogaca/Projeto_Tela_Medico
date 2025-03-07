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