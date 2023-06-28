import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'
import COLORS from "./assets/colors";

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Entypo from 'react-native-vector-icons/Entypo'

import Home from "./components/Home";
import Details from "./components/Details";
import Likes from "./components/Likes";
import User from "./components/User";

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

Entypo.loadFont();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator 
            screenOptions={{
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: COLORS.orange,
            tabBarInactiveTintColor: COLORS.gray,
            tabBarShowLabel: false,
        }}>
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                tabBarIcon: ({color}) => (<Entypo name="home" color={color} size={32}/>),
                headerShown: false
            }}></BottomTab.Screen>
            <BottomTab.Screen
                name="Likes"
                component={Likes}
                options={{
                tabBarIcon: ({color}) => (<Entypo name="heart" color={color} size={32}/>),
                headerShown: false
            }}></BottomTab.Screen>
            <BottomTab.Screen
                name="User"
                component={User}
                options={{
                tabBarIcon: ({color}) => (<Entypo name="user" color={color} size={32}/>),
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

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
});

export default App;