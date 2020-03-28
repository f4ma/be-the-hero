import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  /**
   * Total de casos
   * Bold no numero de casos
   */
  headerText: {
    fontSize: 15,
    color: "#737380"
  },
  headerTextBold: {
    fontWeight: "bold"
  },

  //Mensagem de bem vindo
  title: {
    fontSize: 50,
    marginBottom: 16,
    marginTop: 48,
    color: "#13131a",
    fontWeight: "bold"
  },
  //Descrição abaixo
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380"
  },
  //Margem entre a mensagem e a lista de casos
  incidentList: {
    marginTop: 32
  },
  //Box de casos
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16
  },
  //Titulos dos dados da ONG
  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold"
  },
  //Dados da ong
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380"
  },
  /**
   * Botão para ir para os detalhes
   *
   */
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  detailsButtonText: {
    color: "#e02041",
    fontSize: 15,
    fontWeight: "bold"
  }
});
