import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import Inicio from "./assets/logo.png";
import { useEffect, useState } from 'react';
import HomeNavigation from './src/screens/HomeNavigation';
import Home from './src/screens/Home';
import Mensaje from './src/screens/Mensaje';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const [bienvenido, setBienvenido] = useState(true)
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      bienvenida();
    }, 2000);
  }, [])

  const bienvenida = () => {
    setBienvenido(false)
  }

  if (bienvenido) {
    return (
      <View style={styles.inicio}>
        <Image source={Inicio} />
      </View>
    )
  }

  return (
    /*     <View style={styles.container}>
          <StatusBar style="auto" />
          <HomeNavigation></HomeNavigation>
         */
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Blank" component={Mensaje} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inicio: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  }
});