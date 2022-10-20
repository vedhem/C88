import React from 'react';
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = {createBottomTabNavigator};
const BottomTabNavigator = () => {
    return (
        <TabNavigator
        screenOptions = {({
            route
        }) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName
                if (route.name === 'Feed') {
                    iconName = focused? 'book':'book-outline';
                }
                else if (route.name === 'CreatePost') {
                    iconName = focused? 'add-circle':'add-circle-outline'
                }
                return <Ionicons name={iconName} size={size} color={color}/>
            }
        })}
        TabBarOptions = {{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey'
        }}
        >
            <Tab.Screen name='Feed' component={Feed} options={{
                headerShown: false
            }}/>
            <Tab.Screen name='CreatePost' component={CreatePost} options={{
                headerShown: false
            }}/>
        </TabNavigator>
    )
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#2a2a2a",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
});


export default BottomTabNavigator;
