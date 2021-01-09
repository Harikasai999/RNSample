import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
export default function Profile() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text>Profile</Text>
            <TouchableOpacity
                // style={styles.button}
                onPress={
                    () => navigation.navigate('Settings')
                }>
                <Text>Open Settings Screen</Text>
            </TouchableOpacity>
        </View>
    )
}
