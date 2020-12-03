import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { ThemeContext } from '@context/theme-context'
export default function SideBar(props) {
    const { theme, toggle, dark } = useContext(ThemeContext);
    return (
        <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
            <Text style={{ color: theme.color }}>SideBar</Text>
        </View>
    )
}
