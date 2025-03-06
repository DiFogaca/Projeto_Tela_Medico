function inicializarPreencherProntuario(pacienteId) {
    const prontuarioPromise = fetch('/data/prontuarios.json')
        .then(response => response.json())
        .then(data => data.Prontuario.find(p => p.pacienteId === pacienteId));

    const prescricoesPromise = fetch('/data/prescricoes.json')
        .then(response => response.json())
        .then(data => data.Prescricoes.find(p => p.pacienteId === pacienteId));

    const requisicoesPromise = fetch('/data/requisicoes.json')
        .then(response => response.json())
        .then(data => data.Requisicoes.filter(r => r.pacienteId === pacienteId));

    const diagnosticosPromise = fetch('/data/diagnosticos.json')
        .then(response => response.json())
        .then(data => data.Diagnosticos.find(d => d.pacienteId === pacienteId));

    return Promise.all([prontuarioPromise, prescricoesPromise, requisicoesPromise, diagnosticosPromise])
        .then(([prontuario, prescricoes, requisicoes, diagnostico]) => {
            if (prontuario) {
                document.getElementById('temp').value = prontuario.temperatura;
                document.getElementById('pressao').value = prontuario.pressao;
                document.getElementById('oxigenacao').value = prontuario.oxigenacao;
                document.getElementById('peso').value = prontuario.peso;
                document.getElementById('medicamentos').value = prontuario.medicamentos;
                document.getElementById('descricao-medicamentos').value = prontuario.descricaoMedicamentos;
                document.getElementById('alergias').value = prontuario.alergias;
                document.getElementById('descricao-alergias').value = prontuario.descricaoAlergias;
                document.getElementById('sintomas').value = prontuario.sintomas;
            }

            if (requisicoes.length > 0) {
                const requisicoesContainer = document.getElementById('requisicoes');
                requisicoes.forEach(requisicao => {
                    const novaRequisicao = criarRequisicao(requisicao.descricao);
                    requisicoesContainer.appendChild(novaRequisicao);
                });
            }

            if (prescricoes) {
                document.getElementById('prescricoes').value = prescricoes.descricao;
            }

            if (diagnostico) {
                document.getElementById('diagnostico').value = diagnostico.descricao;
            }
        })
        .catch(error => {
            console.error('Erro ao carregar dados do prontuário:', error);
        });
}

window.inicializarPreencherProntuario = inicializarPreencherProntuario;