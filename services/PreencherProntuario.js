function inicializarPreencherProntuario(id) {
    //const prontuarioPromise = fetch('http://localhost:8000/api/v1/prontuarios/')
    const prontuarioPromise = fetch('/data/prontuarios.json')
        .then(response => {
            return response.json();
        })
        .then(data => data.Prontuario.find(p => p.pacienteDocumento === id));

    //const prescricoesPromise = fetch('http://localhost:8000/api/v1/prontuarios/')
    const prescricoesPromise = fetch('/data/prescricoes.json')
        .then(response => {
            return response.json()})
        .then(data => data.Prescricoes.find(p => p.pacienteDocumento === id));

    //const requisicoesPromise = fetch('http://localhost:8000/api/v1/requisicoes/')
    const requisicoesPromise = fetch('/data/requisicoes.json')
        .then(response => {
            return response.json()})
        .then(data => data.Requisicoes.find(r => r.pacienteDocumento === id));

    //const diagnosticosPromise = fetch('http://localhost:8000/api/v1/diagnosticos/')
    const diagnosticosPromise = fetch('/data/diagnosticos.json')
        .then(response => {
            return response.json()})
        .then(data => data.Diagnosticos.find(d => d.pacienteDocumento === id));

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