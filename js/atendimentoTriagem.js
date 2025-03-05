// Mock de dados do paciente
mockPaciente = {
    nome: "João Silva",
    documento: "123.456.789-00",
    urgencia: "Alta",
    naturalidade: "Rio de Janeiro",
    nacionalidade: "Brasileiro",
    responsavel: "Maria Silva",
    carteirinha: "9876543210",
    dataNascimento: "1985-07-20",
    sexo: "Masculino",
    cep: "20000-000",
    rua: "Rua das Flores",
    numero: "123",
    bairro: "Centro",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    email: "joao.silva@gmail.com",
    telefone: "(21) 99999-8888",
};

// Mock de dados do prontuário
mockProntuario = {
    temperatura: "37.5°C",
    pressao: "120/80",
    oxigenacao: "98%",
    peso: "80kg",
    medicamentos: "Sim",
    descricaoMedicamentos: "Paracetamol 500mg - 1 comprimido a cada 6 horas",
    alergias: "Sim",
    descricaoAlergias: "Dipirona",
    sintomas: "Dor de cabeça, febre e mal-estar",
};

function waitForElement(selector, intervalTime = 100, timeout = 5000) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(true);
        }

        const startTime = Date.now();
        const interval = setInterval(() => {
            if (document.querySelector(selector)) {
                clearInterval(interval);
                resolve(true);
            } else if (Date.now() - startTime > timeout) {
                clearInterval(interval);
                resolve(false);
            }
        }, intervalTime);
    });
}

function preencherDadosPaciente() {
    // Preenchendo os dados do paciente
    document.getElementById('nome').value = mockPaciente.nome;
    document.getElementById('documento').value = mockPaciente.documento;
    document.getElementById('urgencia').value = mockPaciente.urgencia;
    document.getElementById('naturalidade').value = mockPaciente.naturalidade;
    document.getElementById('nacionalidade').value = mockPaciente.nacionalidade;
    document.getElementById('responsavel').value = mockPaciente.responsavel;
    document.getElementById('carteirinha').value = mockPaciente.carteirinha;
    document.getElementById('dataNascimento').value = mockPaciente.dataNascimento;
    document.getElementById('sexo').value = mockPaciente.sexo;
    document.getElementById('cep').value = mockPaciente.cep;
    document.getElementById('rua').value = mockPaciente.rua;
    document.getElementById('numero').value = mockPaciente.numero;
    document.getElementById('bairro').value = mockPaciente.bairro;
    document.getElementById('cidade').value = mockPaciente.cidade;
    document.getElementById('estado').value = mockPaciente.estado;
    document.getElementById('email').value = mockPaciente.email;
    document.getElementById('telefone').value = mockPaciente.telefone;
}

function preencherDadosProntuario() {
    // Preenchendo os dados do prontuário
    document.getElementById('temp').value = mockProntuario.temperatura;
    document.getElementById('pressao').value = mockProntuario.pressao;
    document.getElementById('oxigenacao').value = mockProntuario.oxigenacao;
    document.getElementById('peso').value = mockProntuario.peso;
    document.getElementById('medicamentos').value = mockProntuario.medicamentos;
    document.getElementById('descricao-medicamentos').value = mockProntuario.descricaoMedicamentos;
    document.getElementById('alergias').value = mockProntuario.alergias;
    document.getElementById('descricao-alergias').value = mockProntuario.descricaoAlergias;
    document.getElementById('sintomas').value = mockProntuario.sintomas;
    
    waitForElement('#requisicoes').then(isLoaded => {
        if(isLoaded){
            // Preenchendo a requisição inicial
            const requisicoesContainer = document.getElementById('requisicoes');
            if (mockRequisicoes.length > 0) {
                const requisicaoInicial = criarRequisicao(mockRequisicoes[0]); // Cria a requisição inicial
                requisicoesContainer.appendChild(requisicaoInicial);
            }
        
            // Preenchendo prescrições e diagnóstico
            document.getElementById('prescricoes').value = mockPrescricoes;
            document.getElementById('diagnostico').value = mockDiagnostico;
        }
    })
}
//-------------------------

document.getElementById("paciente-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // Adicionar a lógica de envio de dados aqui
    alert("Formulário enviado com sucesso!");
});

document.getElementById('medicamentos').addEventListener('change', function () {
    const descricaoMedicamentosGroup = document.getElementById('descricao-medicamentos-group');
    if (this.value === 'Sim') {
        descricaoMedicamentosGroup.style.display = 'block';
    } else {
        descricaoMedicamentosGroup.style.display = 'none';
    }
});

document.getElementById('alergias').addEventListener('change', function () {
    const descricaoAlergiasGroup = document.getElementById('descricao-alergias-group');
    if (this.value === 'Sim') {
        descricaoAlergiasGroup.style.display = 'block';
    } else {
        descricaoAlergiasGroup.style.display = 'none';
    }
});

estadosBrasileiros = [
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

function popularEstados() {
    const selectEstado = document.getElementById('estado');

    estadosBrasileiros.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado.sigla;
        option.textContent = `${estado.nome} - ${estado.sigla}`;
        selectEstado.appendChild(option);
    });
}

// Evento para editar os campos de dados do paciente
document.getElementById('btn-editar').addEventListener('click', function () {
    const campos = document.querySelectorAll('#paciente-form input, #paciente-form select, #paciente-form textarea');
    campos.forEach(campo => {
        campo.disabled = false; // Habilita todos os campos para edição
    });
    document.getElementById('btn-editar').style.display = 'none'; // Esconde o botão de editar
    const btnSalvar = document.createElement('button'); // Cria o botão de salvar
    btnSalvar.textContent = 'Salvar';
    btnSalvar.className = 'btn btn-success';
    btnSalvar.type = 'button';
    btnSalvar.id = 'btn-salvar';
    document.getElementById('editar-paciente').appendChild(btnSalvar);

    // Evento para salvar os dados editados
    btnSalvar.addEventListener('click', function () {
        const campos = document.querySelectorAll('#paciente-form input, #paciente-form select, #paciente-form textarea');
        campos.forEach(campo => {
            campo.disabled = true; // Desabilita todos os campos após a edição
        });
        document.getElementById('btn-editar').style.display = 'inline-block'; // Exibe novamente o botão editar
        btnSalvar.remove(); // Remove o botão de salvar
        alert('Dados salvos com sucesso!');
    });
});

// Função para criar uma nova requisição com botão de exclusão
function criarRequisicao(descricao = '') {
    // Cria um novo elemento textarea
    const novoTextarea = document.createElement('textarea');
    novoTextarea.className = 'form-control requisicao';
    novoTextarea.rows = 2;
    novoTextarea.placeholder = 'Descreva a requisição';
    novoTextarea.value = descricao; // Preenche com a descrição, se fornecida

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

    return novoGrupo;
}

waitForElement('#adicionar-requisicao').then(isLoaded => {
    if(isLoaded){
        document.getElementById('adicionar-requisicao').addEventListener('click', function () {
            const novaRequisicao = criarRequisicao(); // Cria uma nova requisição vazia
            document.getElementById('requisicoes').appendChild(novaRequisicao); // Adiciona ao container
        });
        // Evento delegado para excluir requisições
        document.addEventListener('click', function (event) {
            if (event.target.classList.contains('excluir-requisicao')) {
                // Remove o grupo de requisição ao qual o botão de exclusão pertence
                event.target.closest('.requisicao-group').remove();
            }
        });
        
        // Verifica se há uma requisição inicial e adiciona o evento de exclusão
        requisicaoInicial = document.querySelector('.requisicao-group');
        if (requisicaoInicial) {
            const botaoExcluirInicial = requisicaoInicial.querySelector('.excluir-requisicao');
            if (botaoExcluirInicial) {
                botaoExcluirInicial.addEventListener('click', function () {
                    requisicaoInicial.remove(); // Remove a requisição inicial
                });
            }
        }
    }
})


function inicializarAtendimentoTriagem() {
    console.log("Inicializando atendimentoTriagem.js...");

    if (!document.getElementById("paciente-form")) {
        console.error("ERRO: Elementos do DOM ainda não carregaram.");
        return;
    }

    popularEstados();
    preencherDadosPaciente();
    preencherDadosProntuario();
}

// Se a página for carregada normalmente, a função será executada pelo evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", inicializarAtendimentoTriag);

// Função para abrir o modal de confirmação
document.querySelector(".btn-salvar").addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do botão de submit
    const modal = new bootstrap.Modal(document.getElementById('confirmarSalvarModal'));
    modal.show();
});

// Função de confirmação de salvar e redirecionamento
document.getElementById("confirmarSalvarBtn").addEventListener("click", function () {
    // Chama a função para salvar o atendimento
    salvarAtendimento();

    // Fecha o modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('confirmarSalvarModal'));
    modal.hide();

    // Redireciona para o dashboardMed
    carregarPagina("triagem/dashTriagem", "Dashboard Médico");
});

// Função de salvar o atendimento (exemplo de lógica)
function salvarAtendimento() {
    console.log("Atendimento salvo com sucesso!");
    // Adicione a lógica de salvar os dados do atendimento aqui
}