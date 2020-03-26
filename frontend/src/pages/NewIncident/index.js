import React, { useState } from "react";
/**
 * Carregar pagina sem dar reload
 * Retornar para pagina setada
 */
import { Link, useHistory } from "react-router-dom";
//Icone do login
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
//import do css
import "./styles.css";
//import do logo
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  //Pegar o id da Ong
  const ongId = localStorage.getItem("ongId");

  /**
   * Não recarregar pagina ao enviar formulario.
   * Cadastrar novos casos.
   */
  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };
    //Mensagem para o usario.
    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push("/profile");
    } catch (err) {
      alert("Erro ao cadastrar caso, tente novamente.");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso" // Cadastro de novos casos
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
