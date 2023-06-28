import React from "react";
import {View, Text, SafeAreaView} from 'react-native'
import COLORS from "./assets/colors";

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "./components/Home";
import Details from "./components/Details";
import Likes from "./components/Likes";
import User from "./components/User";

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                headerShown: false
            }}></BottomTab.Screen>
            <BottomTab.Screen
                name="Likes"
                component={Likes}
                options={{
                headerShown: false
            }}></BottomTab.Screen>
            <BottomTab.Screen
                name="User"
                component={User}
                options={{
                headerShown: false
            }}></BottomTab.Screen>
        </BottomTab.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name="BottomTabNavigator"
                    component={BottomTabNavigator}
                    options={{
                    headerShown: false
                }}></Stack.Screen>
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                    headerShown: false
                }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;