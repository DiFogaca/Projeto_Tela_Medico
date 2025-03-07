function inicializarPreencherProntuario(pacienteId) {
    const prontuarioPromise = fetch('/data/prontuarios.json')
        .then(response => {
            return response.json();
        })
        .then(data => data.Prontuario.find(p => p.pacienteDocumento === pacienteId));

    const prescricoesPromise = fetch('/data/prescricoes.json')
        .then(response => {
            return response.json()})
        .then(data => data.Prescricoes.find(p => p.pacienteDocumento === pacienteId));

    const requisicoesPromise = fetch('/data/requisicoes.json')
        .then(response => {
            return response.json()})
        .then(data => data.Requisicoes.find(r => r.pacienteDocumento === pacienteId));

    const diagnosticosPromise = fetch('/data/diagnosticos.json')
        .then(response => {
            return response.json()})
        .then(data => data.Diagnosticos.find(d => d.pacienteDocumento === pacienteId));

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