import * as React from 'react';

import
MaterialCommunityIcons
    from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import { Details, Feed, Profile, Settings, Products, CartScreen } from "@containers";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function FeedStack() {
    return (
        <Stack.Navigator
            initialRouteName="Feed"
            screenOptions={{
                headerStyle: { backgroundColor: 'green' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen
                name="Feed"
                component={Feed}
                options={{ title: 'Feed Page' }} />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ title: 'Details Page' }} />
        </Stack.Navigator>
    );
}

function ProfileStack() {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerStyle: { backgroundColor: 'green' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ title: 'Setting Page' }} />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ title: 'Details Page' }} />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ title: 'Profile Page' }} />
        </Stack.Navigator>
    );
}

function BottomTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Feed"
                tabBarOptions={{
                    activeTintColor: 'green',
                }}>
                <Tab.Screen
                    name="FeedStack"
                    component={FeedStack}
                    options={{
                        tabBarLabel: 'Feed',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={size}
                            />
                        ),
                    }} />
                <Tab.Screen
                    name="Profile"
                    component={ProfileStack}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="account"
                                color={color}
                                size={size}
                            />
                        ),
                    }} />
                <Tab.Screen
                    name="Products"
                    component={Products}
                    options={{
                        tabBarLabel: 'Products',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="view-list"
                                color={color}
                                size={size}
                            />
                        ),
                    }} />
                <Tab.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{
                        tabBarLabel: 'Cart',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="cart"
                                color={color}
                                size={size}
                            />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default BottomTab;