import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './Home';
import Blank from './Mensaje';


const HomeNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Blank" component={Blank} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default HomeNavigation;