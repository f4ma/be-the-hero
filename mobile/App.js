import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React from "react";

import Routes from "./src/routes";

export default function App() {
  /**
   * Não existe herança de estilos no RN
   * Sendo assim é necessario criar uma estilização propria para cada elemento
   * Exemplo : style={styles.container}
   */
  return <Routes />;
}
