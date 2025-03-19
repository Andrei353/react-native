//no inicio precisa declarar os imports
import{View,Text, StyleSheet} from 'react-native';
import  Component  from './componente';

//corpo do app (Html)
export default function App(){

  return(
    //View = Body e Div
    <View style= {styles.central}>

    <Text style = {styles.titulo}>Sistema Conversor de Moedas</Text>
    <Component/>
    </View>

  );

}

// Inicio do StyleSheet (CSS)

const styles = StyleSheet.create({

  central:{
    flex:1,
    backgroundColor:'pink',
    alignItems: 'center',
    justifyContent:'center'
  },

  titulo:{
    fontSize: 25,
    color:'dark'
  }

})


