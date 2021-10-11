import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import Dividir from '../views/Dividir';
import Factor from '../views/Factor';
import Multiplicar from '../views/Multiplicar';
import Restar from '../views/Restar';
import Sumar from '../views/Sumar';


const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name = 'Sumar' 
                    component = { Sumar } 
                    options = {{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name = 'plus' size= { size } color = { color } />
                        ) 
                    }} 
                />
                <Tab.Screen 
                    name = 'Restar' 
                    component = { Restar } 
                    options = {{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name = 'minus-circle' size= { size } color = { color } />
                        ) 
                    }} 
                />
                <Tab.Screen 
                    name = 'Multiplicar' 
                    component = { Multiplicar } 
                    options = {{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name = 'times-circle' size= { size } color = { color } />
                        ) 
                    }} 
                />
                <Tab.Screen 
                    name = 'Dividir' 
                    component = { Dividir } 
                    options = {{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name = 'divide' size= { size } color = { color } />
                        ) 
                    }} 
                />
                <Tab.Screen 
                    name = 'Factor' 
                    component = { Factor } 
                    options = {{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name = 'exclamation' size= { size } color = { color } />
                        ) 
                    }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;