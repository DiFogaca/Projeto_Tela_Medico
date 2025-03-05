data = {
  medicosAtendendo: 2,
  enfermeirosAtendendo: 4,
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

function inicializarRecepcao() {
  let medicosAtendendoBox = document.getElementById("medicosAtendendo");
  let enfermeirosAtendendoBox = document.getElementById("enfermeirosAtendendo");

  medicosAtendendoBox.innerHTML = data.medicosAtendendo;
  enfermeirosAtendendoBox.innerHTML = data.enfermeirosAtendendo;
  data.fila.map((fila) => {
    switch (fila.prioridade) {
      case "pouco urgente":
        document.getElementById("fila-numero-1").innerHTML = fila.senha;
        document.getElementById("fila-espera-1").innerHTML = fila.tempoEspera;
        break;
      case "urgente":
        document.getElementById("fila-numero-2").innerHTML = fila.senha;
        document.getElementById("fila-espera-2").innerHTML = fila.tempoEspera;
        break;
      case "muito urgente":
        document.getElementById("fila-numero-3").innerHTML = fila.senha;
        document.getElementById("fila-espera-3").innerHTML = fila.tempoEspera;
        break;
      case "emergência":
        document.getElementById("fila-numero-4").innerHTML = fila.senha;
        document.getElementById("fila-espera-4").innerHTML = fila.tempoEspera;
        break;
      default:
        document.getElementById("fila-numero-0").innerHTML = fila.senha;
        document.getElementById("fila-espera-0").innerHTML = fila.tempoEspera;
        break;
    }
  });
}

function init() {
  inicializarRecepcao();
}

document.addEventListener("DOMContentLoaded", init);
