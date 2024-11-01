import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Dashboard/HomeScreen';
import Profile from '../Screens/Profile/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Update from '../Screens/Update/Update';
import Inventory from '../Screens/Inventory/Inventory';

const Tab = createBottomTabNavigator();
export default function Navigator() {
    return (

        <Tab.Navigator   screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              paddingHorizontal: 5,
              paddingTop: 0,
              backgroundColor: '#000',
              position: 'absolute',
          },
        })} >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Inventory" component={Inventory} options={{
                headerShown: false,
                tabBarLabel: 'Inventory',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="stats-chart" color={'white'} size={size} />
                ),
            }} />
            <Tab.Screen name="Update" component={Update} options={{
                headerShown: false,
                tabBarLabel: 'Update',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="share" color={'white'} size={size} />
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown: false,
                tabBarLabel: 'settings',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" color={'white'} size={size} />
                ),
            }} />
            
        </Tab.Navigator>
    )
}