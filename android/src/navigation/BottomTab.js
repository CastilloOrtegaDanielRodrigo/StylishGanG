import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='HomeCreen' component={HomeScreen} />
        </Tab.Navigator>
    );
}
