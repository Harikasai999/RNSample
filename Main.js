import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import { ThemeContext } from './theme-context'
export default function Main() {
    const { theme, toggle, dark } = useContext(ThemeContext);
    // console.log(theme, "--")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
            <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
            <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>

                <TouchableOpacity
                    onPress={toggle}
                    style={{
                        backgroundColor: theme.backgroundColor,
                        height: 60, width: 100, borderWidth: 2,
                        borderColor: theme.borderColor,
                        justifyContent: 'center',
                    }}

                >
                    <Text style={{ color: theme.color, textAlign: 'center' }}> Toggle to {!dark ? 'Dark' : 'Light'} theme </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});