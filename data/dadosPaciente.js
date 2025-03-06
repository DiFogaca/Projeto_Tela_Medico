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

// Mock de requisições
mockRequisicoes = [
    "Exame de sangue",
    "Ultrasom",
];

// Mock de prescrições e diagnóstico
mockPrescricoes = "Prescrição: Paracetamol 500mg a cada 6 horas.";
mockDiagnostico = "Diagnóstico: Gripe comum.";

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

export {preencherDadosPaciente, preencherDadosProntuario};