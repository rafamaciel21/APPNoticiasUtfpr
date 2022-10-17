
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5fffa',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === "ios"? 0: 50
    },
    title:{
      fontSize:28,
      color: "#a52a2a",
      marginBottom: 10,
      fontWeight: "bold"
    },
    texto: {
      fontSize: 20,
      color:'#000',
      marginLeft:20,
      fontWeight: "bold"

    },
    input: {
      width: 300,
      marginTop: 10,
      padding: 10,
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: "#a52a2a",
      marginLeft:"auto",
      marginRight:"auto",
      color: "#4d5156"
  
    },
    imagemLogin: {
      width: '120%',
      height: 300,
      position: "relative",
      resizeMode: 'contain',
      margintop: 10,
    },
    imagemPerfil: {
      width: '100%',
      height: 210,
      position: "relative",
      resizeMode: 'contain',
      marginTop: 5,
    },
    botaoLogin:{
      width:220,
      height:50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#a52a2a",
      borderRadius: 50,
      marginTop:30

    },
    textBotaoLogin:{
      color: "#f5fffa"
    },
    textCadastroLogin:{
      marginTop: 10,
      color: "#4d5156"

    },
    linkCadastro:{
      marginTop: 10,
      color: "#1877f2",
      fontSize: 16,
      textDecorationLine: 'underline'
    },

    botaoLogout:{
      width:220,
      height:50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ff6347",
      borderRadius: 50,
      marginTop:30

    },
    textBotaoLogout:{
      color: "#000"
    },

    botaoGenerico:{
      width:220,
      height:50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1877f2",
      borderRadius: 50,
      marginTop:30
    },
    textBotaoGenerico:{
      color: "#f5fffa"
    },
    contentAlert:{
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems:"center"
    },
    warningAlert:{
      paddingLeft:10,
      color:"#bdbdbd",
      fontSize: 16,
    },
    cadastro:{
      marginTop:20,
      marginBottom: 10,
      fontSize: 20,
      fontWeight: 'bold',
      color:'#a52a2a',
      alignItems: "center"
    },
    botaoRegister:{
      width:220,
      height:50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#a52a2a",
      borderRadius: 50,
      marginTop:30

    },
    textBotaoRegister:{
      color: "#f5fffa"
    },
    login:{
      marginTop: 10,
      color: "#4d5156"

    },
    linkLogin:{
      marginTop: 10,
      color: "#1877f2",
      fontSize: 16,
      textDecorationLine: 'underline'
    }
   
  });

  export default styles