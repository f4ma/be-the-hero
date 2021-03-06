<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/bth-logo.png" alt="Logo" width="95" height="40">
  </a>

  <h3 align="center">Be The Hero</h3>

  <p align="center">
    Herois da vida real!
    <br />
    <a href="https://github.com/f4ma/be-the-hero/blob/master/README.md"><strong>Descobrir »</strong></a>
    <br />
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Conteudos

* [Sobre o Projeto](#about-the-project)
  * [Tecnologias](#built-with)
* [Iniciando](#getting-started)
  * [Pre-requesitos](#prerequisites)
  * [Instalação](#installation)
* [Uso](#usage)
* [Roadmap](#roadmap)
* [Contribuindo](#contributing)
* [Agradecimentos](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## Sobre o Projeto

[![Be The Hero][product-screenshot]]()

A Semana OmniStack é um workshop online produzido pela Rocketseat. Esta é a versão 11, onde o Diego Fernandes nos ensina a desenvolver uma aplicação desde o backend até o frontend web e mobile com uma única linguagem, o Javascript. O nome da aplicação desenvolvida é Be The Hero, uma aplicação para cadastro de ONGs e casos cadastrados por elas para que outras pessoas possam ajudar a resolvê-los.

## Tecnologias
Todas as tecnologias usadas no Front-End e no Back-End
### Front-End
Frontend web, desenvolvido em ReactJS. Nesta parte da aplicação, é possível entender diversos conceitos do React e do desenvolvimento web em geral.

Além disso, é muito importante entender como a página web normalmente se comunica com a API por meio de requisições http, as quais retornam ao frontend como um objeto json. Neste caso, foi utilizada a lib axios para realizar a comunicação com a api.

Com isso, a página da aplicação Be The Hero será aberta. Nela, uma ong poderá se cadastrar e cadastrar seus incidentes. A ong também poderá entrar em contato com outras ONGs para poder ajudar nos incidentes delas.
* [ReactJS](https://pt-br.reactjs.org/) + [ReactNative](https://reactnative.dev/)
### Back-End
Api desenvolvida em NodeJS com acesso a banco de dados relacional = SQLite. Esta api faz uso do Knex.

As rotas para acessar a API estão no arquivo routes.js. Você pode testar as rotas antes de usar o frontend com o software Insomnia. Você só precisa baixar e instalar o Insomnia na sua máquina, e acessar as rotas da aplicação.

* [Node](https://nodejs.org/en/)
* [Knex](http://knexjs.org/)



<!-- GETTING STARTED -->
## Começando

Dependencias e como instalar.

### Pré-requisitos
```sh
git, node, express, knex, sqlite, react, react-native, expo
```
* [Git](https://git-scm.com/downloads)
* [Node](https://nodejs.org/pt-br/download/)


 ### Instalação

Clone o repositório, utilizando git clone ou faça o download do repositório.

Para iniciar o *Backend* do React utilize os comandos:

```sh

cd backend
yarn install (ou) npm install
yarn start 

````


<!-- ACKNOWLEDGEMENTS
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com) 





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/77811449-13935d80-7079-11ea-9123-4c8ff90a696b.png


