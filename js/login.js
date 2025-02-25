const userType = [
    { usuario: "admin", senha: "1234", tipo: "ADMIN" },
    { usuario: "medico", senha: "1234", tipo: "MEDICO" },
    { usuario: "enfermeiro", senha: "1234", tipo: "ENFERMEIRO" },
    { usuario: "recepcionista", senha: "1234", tipo: "RECEPCAO" },
];

// Espera o DOM carregar antes de adicionar o evento ao botão
document.addEventListener("DOMContentLoaded", function () {
    const botaoEntrar = document.getElementById("botaoEntrar");

    if (botaoEntrar) {
        botaoEntrar.addEventListener("click", function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const messageDiv = document.getElementById("message");

            const usuarioLogado = findUser(username, password);

            if (usuarioLogado) {
                // Salva no localStorage
                localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

                messageDiv.textContent = "Login bem-sucedido!";
                messageDiv.style.color = "green";

                // Redireciona após um pequeno delay
                setTimeout(() => {
                    window.location.href = "/index.html";
                }, 1000);
            } else {
                messageDiv.textContent = "Nome de usuário ou senha incorretos.";
                messageDiv.style.color = "red";
            }
        });
    } else {
        console.error("Erro: Botão de login não encontrado no DOM.");
    }
});

function findUser(username, password) {
    return userType.find(user => user.usuario === username && user.senha === password);
}

