<h1> Painel de Agendamento para Clínicas </h1>

<h2> Trabalho do curso de Análise e Desenvolvimento de Sistemas - UVA - 2026 </h2>

<h3> Estrutura de Diretórios e Arquitetura </h3>

O projeto foi dividido em duas partes principais:

Backend (API)
Frontend (SPA)

 <h3>Backend </h3>

<p>
Desenvolvido em Node.js, seguindo o padrão arquitetural MVC (Model-View-Controller).

Obs: Para esta prova de conceito, não foi utilizado banco de dados. Os dados são armazenados em memória (arrays), aproveitando o fato do Node.js manter o estado enquanto o servidor está em execução.
</p>


Responsabilidades:


Models: definem a estrutura e manipulação dos dados

<ul>
<li>Pacientes</li>
<li>Profissionais</li>
<Li>Consultas</Li>

  Controllers: recebem as requisições HTTP, processam os dados e retornam respostas em JSON
Rotas: fazem a ligação entre endpoints da API e os controllers
</ul>

<h3> Frontend </h3>

Desenvolvido com Vue.js, utilizando o conceito de SPA (Single Page Application).

O sistema possui telas separadas para:

Cadastro de Pacientes
Cadastro de Profissionais
Agendamento de Consultas

A navegação entre telas ocorre de forma dinâmica, sem recarregamento da página.

<h3>Funcionalidades </h3>

O sistema permite:
<ul>
<li> Cadastro de pacientes </li>
<li> Cadastro de profissionais </li>
<li>Agendamento de consultas </li>
<li>Listagem de registros cadastrados</li>
<li>Associação entre paciente e profissional em uma consulta</li>
<li>Validação básica de dados no backend</li>
  
</ul>


<h3>Tecnologias Utilizadas </h3>

<h4>Backend</h4>

<ul>
<li>Node.js</li>
<Li>JavaScript </Li>
<li>Arquitetura MVC></li>

  <h4>Frontend</h4>
<ul>

<li>Vue.js </li>
<Li>JavaScript</Li>
<li>HTML + CSS </li>
</ul>


<h3>Como Executar o Projeto<h3>

Abra dois terminais:

<h3> Backend </h3>
<code>
cd backend 
node index.js
</code>

Servidor rodará em:

http://localhost:3000
<h3> Frontend </h3>

<code> 
cd frontend 
npm install
npm run dev
</code>

Aplicação disponível em:

http://localhost:5173

<h3>Observações </h3>
Os dados são armazenados em memória, sendo perdidos ao reiniciar o servidor
O projeto tem fins acadêmicos (prova de conceito)
Não foram implementadas autenticação ou validações avançadas

 <h3>Considerações Finais </h3>

Este projeto demonstra a construção de uma aplicação completa com separação entre frontend e backend, aplicação de arquitetura MVC e consumo de API via SPA.
