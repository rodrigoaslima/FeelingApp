import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import { Home } from '../screens/Home';
import { RateScreen } from "../screens/RateScreen"


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes(){
    return(
        <Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: true,
                headerTitleAlign: 'center',
            }}
        >
            <Screen 
                name="Home"
                component={Home}
                options={{
                    headerTitle: 'How are you felling?',
                    headerTintColor: '#FBFBFF',
                    headerStyle: {backgroundColor: '#7C64E3'}
                }}
            />

            <Screen 
                name="RateScreen"
                component={RateScreen}
                options={{
                    headerTitle: 'Rate your felling?',
                    headerTintColor: '#FBFBFF',
                    headerStyle: {backgroundColor: '#7C64E3'}
                    
                }}
            />


        </Navigator>
    )
}

