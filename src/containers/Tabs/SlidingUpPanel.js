import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Mutations } from '@AppUtils'

export default function SlidingUpPanel() {
    useEffect(() => {
        fetchData()
    }, [])
    function fetchData() {
        var value = 20
        Mutations('https://randomuser.me/api/?&results=' + value, null, 'GET')
            .then((response) => {

                console.log("kjkhjkhf", response)
            });
    }
    return (
        <View>
            <Text>SlidingUpPanel</Text>
        </View>
    )
}
