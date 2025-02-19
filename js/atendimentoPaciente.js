document.getElementById("paciente-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Adicionar a lógica de envio de dados aqui
    alert("Formulário enviado com sucesso!");
});


document.getElementById('medicamentos').addEventListener('change', function() {
    const descricaoMedicamentosGroup = document.getElementById('descricao-medicamentos-group');
    if (this.value === 'Sim') {
        descricaoMedicamentosGroup.style.display = 'block';
    } else {
        descricaoMedicamentosGroup.style.display = 'none';
    }
});

document.getElementById('alergias').addEventListener('change', function() {
    const descricaoAlergiasGroup = document.getElementById('descricao-alergias-group');
    if (this.value === 'Sim') {
        descricaoAlergiasGroup.style.display = 'block';
    } else {
        descricaoAlergiasGroup.style.display = 'none';
    }
});


const estadosBrasileiros = [
    { nome: "Acre", sigla: "AC" },
    { nome: "Alagoas", sigla: "AL" },
    { nome: "Amapá", sigla: "AP" },
    { nome: "Amazonas", sigla: "AM" },
    { nome: "Bahia", sigla: "BA" },
    { nome: "Ceará", sigla: "CE" },
    { nome: "Distrito Federal", sigla: "DF" },
    { nome: "Espírito Santo", sigla: "ES" },
    { nome: "Goiás", sigla: "GO" },
    { nome: "Maranhão", sigla: "MA" },
    { nome: "Mato Grosso", sigla: "MT" },
    { nome: "Mato Grosso do Sul", sigla: "MS" },
    { nome: "Minas Gerais", sigla: "MG" },
    { nome: "Pará", sigla: "PA" },
    { nome: "Paraíba", sigla: "PB" },
    { nome: "Paraná", sigla: "PR" },
    { nome: "Pernambuco", sigla: "PE" },
    { nome: "Piauí", sigla: "PI" },
    { nome: "Rio de Janeiro", sigla: "RJ" },
    { nome: "Rio Grande do Norte", sigla: "RN" },
    { nome: "Rio Grande do Sul", sigla: "RS" },
    { nome: "Rondônia", sigla: "RO" },
    { nome: "Roraima", sigla: "RR" },
    { nome: "Santa Catarina", sigla: "SC" },
    { nome: "São Paulo", sigla: "SP" },
    { nome: "Sergipe", sigla: "SE" },
    { nome: "Tocantins", sigla: "TO" }
];

// Função para popular o select com os estados
function popularEstados() {
    const selectEstado = document.getElementById('estado');

    estadosBrasileiros.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado.sigla; // Valor da opção (sigla do estado)
        option.textContent = `${estado.nome} - ${estado.sigla}`; // Texto exibido (Nome - Sigla)
        selectEstado.appendChild(option);
    });
}

// Executa a função ao carregar a página
window.onload = popularEstados;


$(document).ready(function() {
    // Máscara para o telefone (com DDD)
    $('#telefone').mask('(00) 00000-0000');

    // Validação do e-mail (garantir que contenha "@")
    $('#email').on('blur', function() {
        const email = $(this).val();
        if (email.indexOf('@') === -1) {
            alert('O e-mail deve conter o caractere "@".');
            $(this).val('').focus(); // Limpa o campo e coloca o foco nele
        }
    });
});

// Função para adicionar nova requisição
document.getElementById('adicionar-requisicao').addEventListener('click', function() {
    // Cria um novo elemento textarea
    const novoTextarea = document.createElement('textarea');
    novoTextarea.className = 'form-control requisicao';
    novoTextarea.rows = 4;
    novoTextarea.placeholder = 'Descreva a requisição';

    // Cria o botão de exclusão
    const botaoExcluir = document.createElement('button');
    botaoExcluir.type = 'button';
    botaoExcluir.className = 'btn btn-danger btn-sm excluir-requisicao';
    botaoExcluir.textContent = 'X';

    // Cria um div para o botão de exclusão
    const divBotao = document.createElement('div');
    divBotao.className = 'd-flex justify-content-end';
    divBotao.appendChild(botaoExcluir);

    // Cria um novo grupo para a requisição
    const novoGrupo = document.createElement('div');
    novoGrupo.className = 'form-group requisicao-group';
    novoGrupo.appendChild(divBotao);
    novoGrupo.appendChild(novoTextarea);

    // Adiciona o novo grupo ao container de requisições
    document.getElementById('requisicoes').appendChild(novoGrupo);

    // Adiciona o evento de clique ao botão de exclusão
    botaoExcluir.addEventListener('click', function() {
        novoGrupo.remove(); // Remove o grupo da requisição
    });
});

// Adiciona evento de exclusão para a requisição inicial
document.querySelector('.excluir-requisicao').addEventListener('click', function() {
    this.closest('.requisicao-group').remove();
});