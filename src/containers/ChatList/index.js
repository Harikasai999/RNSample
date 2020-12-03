import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { ThemeContext } from '@context/theme-context'
import styles from "./styles";
import RowItem from './RowItem'
export default function ChatList(props) {
    const { theme, toggle, dark } = useContext(ThemeContext);

    // const styles = withStyles(theme);
    const DATA = [
        {
            id: '1',
            user: 'user 1',
            time: "12:08",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Rendered in between each item, but not at the top or bottom."
        },
        {
            id: '2',
            user: 'user 2',
            time: "01:10",
            image: "https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg",
            description: "Rendered in between each item, but not at the top or bottom."
        },
        {
            id: '3',
            user: 'user 3',
            time: "07:00",
            image: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            description: "Rendered in between each item, but not at the top or bottom."
        },
        {
            id: '4',
            user: 'user 4',
            time: "2 days ago",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfO1Mq0Kcpp5TjqGOja-AnEFkpFLAav4R0g&usqp=CAU",
            description: "Rendered in between each item, but not at the top or bottom."
        },
        {
            id: '5',
            user: 'user 5',
            time: "03:07",
            image: "https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg",
            description: "Rendered in between each item, but not at the top or bottom."
        },
        {
            id: '6',
            user: 'user 6',
            time: "4 days ago",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU",
            description: "Rendered in between each item, but not at the top or bottom."
        },
    ];
    const renderItem = ({ item, index }) => (
        <RowItem item={item} index={index} />
    );

    return (
        <View style={styles(theme).container}>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ marginHorizontal: 10 }}
            />
        </View>
    )

}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // backgroundColor: themes.backgroundColor,
//     }
// })
