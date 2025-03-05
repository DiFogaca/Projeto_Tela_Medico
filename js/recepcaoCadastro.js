function cadastrarPaciente(e) {
  e.preventDefault();
  const formData = document.getElementById("paciente-form").submit();
  console.log(formData);
}
let dadosPaciente;
document
  .getElementById("paciente-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que a página recarregue

    const nome = document.getElementById("nome").value;
    const documento = document.getElementById("documento").value;
    const nomeMae = document.getElementById("nomeMae").value;
    const naturalidade = document.getElementById("naturalidade").value;
    const nacionalidade = document.getElementById("nacionalidade").value;
    const responsavel = document.getElementById("responsavel").value;
    const carteirinha = document.getElementById("carteirinha").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const sexo = document.getElementById("sexo").value;
    const cep = document.getElementById("cep").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    dadosPaciente = {
      nome,
      documento,
      nomeMae,
      naturalidade,
      nacionalidade,
      responsavel,
      carteirinha,
      dataNascimento,
      sexo,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      email,
      telefone,
    };
    toggleMyModal();
  });

function mascaraCPF(input) {
  let value = input.value.replace(/\D/g, ""); // Remove tudo que não for número
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  input.value = value;
}

function mascaraCEP(input) {
  let value = input.value.replace(/\D/g, ""); // Remove tudo que não for número
  value = value.replace(/^(\d{5})(\d{1,3})$/, "$1-$2");
  input.value = value;
}

function mascaraTelefone(input) {
  let value = input.value.replace(/\D/g, ""); // Remove tudo que não for número

  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
  }

  input.value = value;
}
function toggleMyModal() {
  document.getElementById("modalConfirmation").classList.toggle("show");
}
function confirmAddPatient() {
  localStorage.setItem("paciente", JSON.stringify(dadosPaciente));
  carregarPagina("recepcao/index");
}

function inicializarRecepcaoCadastro() {}
