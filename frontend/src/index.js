import React from "react";
//Integração do React com a DOM (Arvore de elementos)
import ReactDOM from "react-dom";
import App from "./App";

//Renderizando (Colocar em tela)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //selecinando a DIV com id root
  document.getElementById("root")
);
