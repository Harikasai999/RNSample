import React, { useState, useContext } from 'react'
import { View, Text, Switch, TouchableOpacity } from 'react-native'
import { ThemeContext } from '@context/theme-context'
export default function Home(props) {

    const { theme, toggle, dark } = useContext(ThemeContext);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.backgroundColor }}>
            {/* <Text style={{ color: theme.color }}>{dark ? 'Dark' : 'Light'} Theme</Text> */}
            <Text style={{ color: theme.color }}>Dark Theme</Text>
            <Switch
                // trackColor={{ false: "#767577", true: "#81b0ff" }}
                // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggle}
                value={dark}
                style={{ marginTop: 20 }}
            />
            <TouchableOpacity onPress={() => props.navigation.push("ChatList")}>
                <Text style={{ fontSize: 16, color: theme.color, textDecorationLine: "underline", marginTop: 10 }}>Chat List</Text>
            </TouchableOpacity>
        </View>
    )
}
