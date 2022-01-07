import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/busqueda';
import TransactionScreen from '../screens/transacción';

const Tab = createBottomTabNavigator();
export default class createBottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name = "Búsqueda" component={SearchScreen}/>
                    <Tab.Screen name = "Transacción" component={TransactionScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}