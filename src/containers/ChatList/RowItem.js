import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ThemeContext } from '@context/theme-context'
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';


export default function RowItem({ item, index }) {
    const { theme, toggle, dark } = useContext(ThemeContext);
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={[styles(theme).item, { marginTop: index === 0 ? 10 : 0 }]}
            onPress={() => {
                navigation.goBack();
            }}
        >
            <View style={{ flex: 0.22, }}>
                <Image source={{ uri: item.image }} style={{ height: 70, width: 70, borderRadius: 35 }} />
            </View>
            <View style={{ flex: 0.56 }}>
                <Text style={styles(theme).title}>{item.user}</Text>
                <Text style={styles(theme).descText}>{item.description}</Text>
            </View>
            <View style={{ flex: 0.22, alignItems: 'flex-end', }}>
                <Text style={styles(theme).timeTxt}>{item.time}</Text>
            </View>
            {/* <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.descText}>{item.description}</Text>
        <Text style={styles.timeTxt}>{item.time}</Text> */}
        </TouchableOpacity>
    )
}
