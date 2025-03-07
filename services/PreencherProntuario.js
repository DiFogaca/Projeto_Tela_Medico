function inicializarPreencherProntuario(id) {
    const prontuarioPromise = fetch('http://localhost:8000/api/v1/prontuarios/')
        .then(response => {
            return response.json();
        })
        .then(data => data.find(p => p.id === 1));

    const prescricoesPromise = fetch('http://localhost:8000/api/v1/prontuarios/')
        .then(response => {
            return response.json()})
        .then(data => data.find(p => p.id === 1));

    const requisicoesPromise = fetch('http://localhost:8000/api/v1/requisicoes/')
        .then(response => {
            return response.json()})
        .then(data => data.find(r => r.id === 1));

    const diagnosticosPromise = fetch('http://localhost:8000/api/v1/diagnosticos/')
        .then(response => {
            return response.json()})
        .then(data => data.find(d => d.id === 1));

    return Promise.all([prontuarioPromise, prescricoesPromise, requisicoesPromise, diagnosticosPromise])
        .then(([prontuario, prescricoes, requisicoes, diagnostico]) => { 
            
            if (prontuario) {
                document.getElementById('temp').value = prontuario.temperatura || '';
                document.getElementById('pressao').value = prontuario.pressao || '';
                document.getElementById('oxigenacao').value = prontuario.oxigenacao || '';
                document.getElementById('peso').value = prontuario.peso || '';
                document.getElementById('medicamentos').value = prontuario.medicamentos || '';
                document.getElementById('descricao-medicamentos').value = prontuario.descricaoMedicamentos || '';
                document.getElementById('alergias').value = prontuario.alergias || '';
                document.getElementById('descricao-alergias').value = prontuario.descricaoAlergias || '';
                document.getElementById('sintomas').value = prontuario.sintomas || '';
            }

            if (requisicoes && requisicoes.requisicoes.length > 0) {
                const requisicoesContainer = document.getElementById('requisicoes');
                requisicoesContainer.innerHTML = '';
                requisicoes.requisicoes.forEach(requisicao => {
                    const novaRequisicao = criarRequisicao(requisicao);
                    requisicoesContainer.appendChild(novaRequisicao);
                });
            }

            if (prescricoes) {
                document.getElementById('prescricoes').value = prescricoes.prescricao || '';
            }

            if (diagnostico) {
                document.getElementById('diagnostico').value = diagnostico.diagnostico || '';
            }
        })
        .catch(error => {
            console.error('Erro ao carregar dados do prontuário:', error);
        });
}

window.inicializarPreencherProntuario = inicializarPreencherProntuario;