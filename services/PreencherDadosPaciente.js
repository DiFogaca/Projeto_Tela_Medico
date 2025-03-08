function inicializarPreencherDadosPaciente(id) {
  return fetch('http://127.0.0.1:8000/api/v1/pacientes/')
    .then(response => {
      console.log("Arquivo JSON de pacientes foi carregado");
      return response.json();
    })
    .then(data => {



      const paciente = data?.find(p => p.id === 1);
      
      

      if (paciente) {

        

        document.getElementById('documento').value = paciente.documento;
        document.getElementById('nome').value = paciente.nome;
        document.getElementById('urgencia').value = paciente?.urgencia;
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
      } 
    })
    .catch(error => {
      console.error('Erro ao carregar dados do paciente:', error);
      throw error;
    });
}

window.inicializarPreencherDadosPaciente = inicializarPreencherDadosPaciente;