import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
export default function Feed() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text>Feed</Text>
            <TouchableOpacity
                // style={styles.button}
                onPress={
                    () => navigation.navigate('Details')
                }>
                <Text>Open Details Screen</Text>
            </TouchableOpacity>
        </View>
    )
}
