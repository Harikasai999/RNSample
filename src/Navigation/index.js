
import React, { useState, useMemo, useEffect, useContext } from "react";
import { View, Text, Button, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login, Home, ChatList } from "@containers";
import { SideBar } from "@components";
import { UserContext } from "@context/user-context";
import { ThemeContext } from '@context/theme-context';

const Stack = createStackNavigator();


const Drawer = createDrawerNavigator();

function MyStack() {
    const { theme, toggle, dark } = useContext(ThemeContext);
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: theme.backgroundColor,
                    },
                    headerTintColor: theme.color,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
            <Stack.Screen name="ChatList"
                component={ChatList}
                options={{
                    title: 'Chat',
                    headerStyle: {
                        backgroundColor: theme.backgroundColor,
                    },
                    headerTintColor: theme.color,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
        </Stack.Navigator>
    );
}
function DrawerStack() {
    return (
        <Drawer.Navigator initialRouteName="MyStack"
            drawerContent={props => <SideBar {...props} />}
            drawerStyle={{
                // backgroundColor: 'green',
                // width: 240,
            }}>
            <Drawer.Screen name="MyStack" component={MyStack} />
        </Drawer.Navigator>
    );
}

function AuthStack() {
    const { theme, toggle, dark } = useContext(ThemeContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login"
                component={Login}
                options={{
                    title: 'Login',
                    headerStyle: {
                        backgroundColor: theme.backgroundColor,
                    },
                    headerTintColor: theme.color,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
        </Stack.Navigator>
    );
}
function Navigation() {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    const { theme, toggle, dark } = useContext(ThemeContext);
    useEffect(() => {
        // console.log("iinnnntttt")
        _retrieveData()
    }, [])
    _retrieveData = async () => {
        try {
            // AsyncStorage.removeItem('userID');
            // const value = await AsyncStorage.getItem('userID');
            const getValue = null
            if (getValue !== null) {
                // We have data!!
                // console.log(value);
                setUser(getValue)
            }
        } catch (error) {
            // Error retrieving data
        }
    };
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
                <StatusBar barStyle={theme.statusBar} />
                <NavigationContainer>
                    <UserContext.Provider value={value}>

                        {user ? (

                            <DrawerStack />

                        ) : (
                                <AuthStack />
                            )}



                    </UserContext.Provider>
                </NavigationContainer>
            </SafeAreaView>
        </>
    );
}

export default Navigation;