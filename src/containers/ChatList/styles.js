import { ThemeProvider } from "@react-navigation/native";
import { StyleSheet, } from "react-native";
const styles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor
    },
    text: {
        color: theme.color
    },
    item: {
        backgroundColor: theme.backgroundColor,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: 'lightgrey',
        // paddingHorizontal: 15,
        paddingVertical: 10,
    },
    title: {
        fontSize: 20,
        color: theme.color
        // marginTop: 15
    },
    descText: {
        fontSize: 12,
        color: "grey"
    },
    timeTxt: {
        fontSize: 14,
        color: theme.color,
        marginTop: 5
    }
})
export default styles;