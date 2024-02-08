import React from 'react';
import { StyleSheet, View, Text, StatusBar, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = ({ navigation }) => {


    console.log("El componente Home se está cargando...");
    //const navegar = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={styles.text}>Esta es mi primera app Bienvenido!</Text>
                <Text>XXXXXXXxxxxxxxxxxx Puto el que lee xxxxxxxxxxxXXXXXXX</Text>
            </View>
            <View style={styles.container}>
                <Button
                    title="Ir a Perfil"
                    onPress={() => navigation.navigate('Blank')}
                />
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        justifyContent: "center",
        textAlign: "center",
        color: "black"
    }
})
export default Home; 