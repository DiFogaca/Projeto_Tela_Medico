# Clínica Balala - Sistema de Gestão de Pacientes

Este projeto é um sistema de gestão de pacientes para a Clínica Balala. Ele inclui funcionalidades para diferentes tipos de usuários, como administradores, médicos, enfermeiros e recepcionistas. O sistema permite o gerenciamento de pacientes, triagem, consultas médicas e cadastro de novos pacientes.

## Tópicos 🗂️

* ➡️ [Estrutura do Projeto](#Estrutura-do-Projeto)
* ➡️ [Funcionalidades](#Funcionalidades)
* ➡️ [Scripts](#Scripts)
* ➡️ [Estilos](#Estilos)
* ➡️ [Como Executar](#Como-Executar)
* ➡️ [Contribuidores](#Contribuidores)


## Estrutura-do-Projeto

```
assets/
    images/
        alvo-de-visao.svg
        clinica-logo.svg
        fundo_balala.png
        menu-icon.svg
        ...
css/
    atendimentoPaciente.css
    dashboard.css
    dashboardMed.css
    index.css
    login.css
    modal.css
    recepcao.css
    themeDark.css
    themeLight.css
    typografy.css
js/
    atendimentoPaciente.js
    atendimentoTriagem.js
    dashboard.js
    dashConsultaMed.js
    fiveServer.js
    index.js
    login.js
    recepcao.js
    recepcaoCadastro.js
pages/
    dashboard.html
    login/
        login.html
    medico/
        DashboardConsultaMedica.html
        AtendimentoPaciente-Medico.html
    recepcao/
        index.html
        cadastro.html
    triagem/
        dashTriagem.html
        atendPaciente.html
index.html
README.md
```

## Funcionalidades

### Login

- Página de login: login.html
- Script de login: login.js

### Dashboard

- Página de dashboard: dashboard.html
- Script de dashboard: dashboard.js

### Triagem

- Página de triagem: dashTriagem.html
- Página de atendimento de triagem: atendPaciente.html
- Script de atendimento de triagem: atendimentoTriagem.js

### Médico

- Página de dashboard médico: DashboardConsultaMedica.html
- Página de atendimento médico: AtendimentoPaciente-Medico.html
- Script de consulta médica: dashConsultaMed.js

### Recepção

- Página de recepção: index.html
- Página de cadastro de pacientes: cadastro.html
- Script de recepção: recepcao.js
- Script de cadastro de recepção: recepcaoCadastro.js

## Scripts

### index.js

- Atualiza a data e hora: `atualizarDataHora`
- Carrega páginas dinâmicas: `carregarPagina`
- Executa scripts dinâmicos: `executarScriptsDinamicos`
- Função de logout: `logout`
- Valida usuário logado: `validator`
- Exibe o menu correto baseado no tipo de usuário: `exibirMenuCorreto`

### login.js

- Verifica se o usuário está logado ao carregar a página
- Remove o usuário logado do localStorage ao acessar a página de login
- Adiciona evento de clique ao botão de login para validar as credenciais

### dashboard.js

- Renderiza cartões de pacientes e filas de atendimento
- Alterna o tema da aplicação: `toggleTheme`

## Estilos

Os estilos personalizados estão localizados na pasta css e incluem arquivos para diferentes páginas e temas, como `themeLight.css`, `dashboard.css`, `login.css`, entre outros.

## Imagens

As imagens utilizadas no projeto estão localizadas na pasta images.

## Como-Executar

1. Clone o repositório.
2. Abra o arquivo index.html no navegador para acessar a página inicial.
3. Navegue pelas diferentes páginas e funcionalidades do sistema.

## Contribuidores

[ANTONIO GABRIEL DE OLIVEIRA](https://github.com/Arcane6)  
[BIANCA SILVA BARCELOS](https://github.com/BiancaBarcelos)  
[DIEGO DE LIMA FOGACA](https://github.com/DiFogaca)  
[KLEVERTON MACHADO KULMANN](https://github.com/KlevertonMKulmann)  
[LEILANE CATHERINE JOHN HIRT](https://github.com/leilanehirt)  
[MANOELA DE ARAUJO CUNTIN HARRISON](https://github.com/Manoelah20)