import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff1aff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    listContainer: {
      flex: 1,
      backgroundColor: '#ff1aff'
    },
    listItem: {
      flex: 1,
      backgroundColor: '#ffb3ff',
      marginTop: 8
    },
    text: {
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      paddingBottom: 50,
      marginTop: 20,
      color: '#f2f2f2'
    },
    title: {
      color: '#f2f2f2',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
    },
    titleLogin: {
      color: '#262626',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
      textAlign: 'center'
    },
    inputContainer: {
      flex: 1,
      marginTop: 30,
      width: '90%',
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },
    input: {
      marginTop: 10,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'stretch'
    },
    button: {
      marginTop: 10,
      height: 60,
      backgroundColor: '#ffb3ff',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 20,
      shadowOpacity: 20,
      shadowColor: '#ccc',
    },
    buttonText: {
      color: '#4d4d4d',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    menu: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    menuOption: {
      paddingVertical: 6,
      paddingHorizontal: 6,
      width: 150
    },
    titleList: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#f2f2f2'
    },
    titleForm: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#4d4d4d'
    }
  });

export { styles }