import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ViewBase } from 'react-native';
import HomeScreen from './src/screens/HomeScreen.jsx';
import Inicio from "./assets/logo.png"
import { useEffect, useState } from 'react';

export default function App() {
  const [bienvenido, setBienvenido] = useState(true)

useEffect(() => {
  setTimeout(() => {
    bienvenida();
  }, 2000);
},[])
const bienvenida =()=>{
setBienvenido(false)
}
if(bienvenido==true){
  return(
    <View style={styles.inicio}>
    <Image source={Inicio} />
    </View>
  )
}
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Puto el que leEASDAWE</Text>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inicio:{
    flex:1,
    backgroundColor:"black",    
    alignItems: 'center',
    justifyContent: 'center',
  }
});
