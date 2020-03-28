/**
 * Imports: Hooks basicos: useState e useEffect
 */

import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

/**
 * Pegar quantidade de casos
 * E numero da pagina atual
 * Iniciam com 0
 */
export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  //Botão para ir para o detalhamento do caso
  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }
  /**
   * Evitar que outra conexão aconteça caso tudo já esteja carregado
   */
  async function loadIncidents() {
    if (loading) {
      return;
    }

    /**
     * Se o total for maior que 0 e o numero de incidentes
     * for igual ao total retornar
     */
    if (total > 0 && incidents.length === total) {
      return;
    }
    //Se não
    setLoading(true);

    const response = await api.get("incidents", {
      params: { page }
    });
    //Dados dos Casos
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers["x-total-count"]);
    //Pular pra pagina 2 quando chegar aqui
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindx!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList //Lista dos casos
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        //Não mostrar barra vertical
        // showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        //Carregar novos itens ao chegar a 20%
        onEndReachedThreshold={0.2}
        //Trocar a variavel "item" por "incident"
        renderItem={({ item: incident }) => (
          /**
           * Home - Screen
           * Lista de casos
           */
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              /**
               * Botão de ir para os detalhes
               * Arrow Function sempre que for passar parametros
               */
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
