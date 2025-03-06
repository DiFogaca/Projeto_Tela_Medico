function inicializarPopularEstados(ufSelecionada) {
  const selectEstado = document.getElementById('estado');

  fetch('/data/estados.json')
    .then(response => {
      console.log("Arquivo JSON foi carregado");
      return response.json();
    })
    .then(estados => {
      selectEstado.innerHTML = '';

      estados.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado.sigla;
        option.textContent = `${estado.nome} - ${estado.sigla}`;
        selectEstado.appendChild(option);
      });

      if (ufSelecionada) {
        selectEstado.value = ufSelecionada;
      }
    })
    .catch(error => console.error('Erro ao carregar estados:', error));
}

window.inicializarPopularEstados = inicializarPopularEstados;