function inicializarPreencherDadosPaciente(pacienteId) {
  return fetch('/data/pacientes.json')
    .then(response => {
      console.log("Arquivo JSON de pacientes foi carregado");
      return response.json();
    })
    .then(data => {
      const paciente = data.Paciente.find(p => p.documento === pacienteId);

      if (paciente) {
        document.getElementById('documento').value = paciente.documento;
        document.getElementById('nome').value = paciente.nome;
        document.getElementById('urgencia').value = paciente.urgencia;
        document.getElementById('naturalidade').value = paciente.naturalidade;
        document.getElementById('nacionalidade').value = paciente.nacionalidade;
        document.getElementById('responsavel').value = paciente.responsavel;
        document.getElementById('carteirinha').value = paciente.carteirinha;
        document.getElementById('dataNascimento').value = paciente.dataNascimento;
        document.getElementById('sexo').value = paciente.sexo;
        document.getElementById('cep').value = paciente.cep;
        document.getElementById('rua').value = paciente.rua;
        document.getElementById('numero').value = paciente.numero;
        document.getElementById('bairro').value = paciente.bairro;
        document.getElementById('cidade').value = paciente.cidade;
        document.getElementById('estado').value = paciente.estado;
        document.getElementById('email').value = paciente.email;
        document.getElementById('telefone').value = paciente.telefone;

        return paciente; // Retorna os dados do paciente
      } else {
        throw new Error('Paciente não encontrado');
      }
    })
    .catch(error => {
      console.error('Erro ao carregar dados do paciente:', error);
      throw error;
    });
}

window.inicializarPreencherDadosPaciente = inicializarPreencherDadosPaciente;