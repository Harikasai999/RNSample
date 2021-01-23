import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AppUtils from '@AppUtils'
import { Mutations } from '@AppUtils'

export default function SlidingUpPanel() {
    useEffect(() => {
        let numbers = [{
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        }];
        // console.table(numbers);
        fetchData()
    }, [])
    function fetchData() {
        var value = 1
        AppUtils('https://projects.yellowsoft.in/new_trend/app/members/' + value)
            .then((response) => {

                console.table(response)
            });
    }
    function onLogin() {
        var data = {
            "email": "test@gmail.com",
            "password": "123456"
        }
        AppUtils('https://projects.yellowsoft.in/new_trend/app/login', data, "POST")
            .then((response) => {

                console.log("logginnn", response)
            });
    }

    return (
        <View>
            <TouchableOpacity onPress={onLogin}>
                <Text>SlidingUpPanel</Text>
            </TouchableOpacity>
        </View>
    )
}
