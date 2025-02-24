const userType = [
    {
        usuario: "admin",
        senha: "1234",
        tipo: "ADMIN",
    },
    {
        usuario: "medico",
        senha: "1234",
        tipo: "MEDICO",
    },
    {
        usuario: "enfermeiro",
        senha: "1234",
        tipo: "ENFERMEIRO",
    },
    {
        usuario: "recepcionista",
        senha: "1234",
        tipo: "RECEPCAO",
    },
];


document.getElementById('botaoEntrar').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Dados do usuário de teste
    

    // if (username === usuario && password === senha) {
    //     localStorage.setItem('username', username);

    //     messageDiv.textContent = 'Login bem-sucedido!';
    //     messageDiv.style.color = 'green';

    //     // Redirecionamento direto para a raiz do projeto
    //     console.log(window.location.href); // Debug: verifique a URL
    //     window.location.href = '/index.html';
    // } else {
    //     messageDiv.textContent = 'Nome de usuário ou senha incorretos.';
    //     messageDiv.style.color = 'red';
    // }
    
    const usuarioLogado = findUser(username, password) 
    console.log(username, password)  
    console.log("Bora lá bichão",usuarioLogado)
});


function findUser(username, password) {
    return userType.find(user => user.usuario === username && user.senha === password);
}