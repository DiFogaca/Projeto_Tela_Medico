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
        const dadosPaciente = {};
        campos.forEach(campo => {
            campo.disabled = true; // Desabilita todos os campos após a edição
            dadosPaciente[campo.name] = campo.value; // Coleta os dados dos campos
        });
        document.getElementById('btn-editar').style.display = 'inline-block'; // Exibe novamente o botão editar
        btnSalvar.remove(); // Remove o botão de salvar

        // Envia os dados do paciente via fetch POST
        fetch('/api/salvarPaciente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosPaciente)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Dados salvos com sucesso!');
            } else {
                alert('Erro ao salvar os dados.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao salvar os dados.');
        });
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

document.addEventListener("DOMContentLoaded", inicializarAtendimentoPaciente);

function inicializarAtendimentoPaciente() {
    console.log("Inicializando atendimentoPaciente.js...");

    if (!document.getElementById("paciente-form")) {
        console.error("ERRO: Elementos do DOM ainda não carregaram.");
        return;
    }

    const id = document.getElementById('paciente-id').value;

    // Carrega os dados do paciente e, em seguida, popula os estados
    window.inicializarPreencherDadosPaciente(id).then(paciente => {
        window.inicializarPopularEstados(paciente.estado);
        window.inicializarPreencherProntuario(id);
    });
}

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
    carregarPagina("medico/DashboardConsultaMedica", "Dashboard Médico");
});

// Função de salvar o atendimento (exemplo de lógica)
function salvarAtendimento() {
    console.log("Atendimento salvo com sucesso!");
    // Adicione a lógica de salvar os dados do atendimento aqui
}