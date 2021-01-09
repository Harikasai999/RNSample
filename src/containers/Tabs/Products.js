import React, { useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { actions as cartActions } from './../../redux/cart';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Choclate',
        desc: "Ice cream is a frozen dairy dessert obtained by freezing the ice cream mix with continuous agitation. It contains milk products, sweetening materials, stabilizers, colors, flavors, and egg products.",
        image: "https://images.herzindagi.info/image/2020/Jun/chocolate-parle-g-ice-cream.jpg"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Cornetto',
        desc: "Ice cream had its origins in Europe and was introduced later in the United States where it developed into an industry.",
        image: "https://5.imimg.com/data5/KH/TW/MY-9134447/big-cone-ice-cream-500x500.jpg"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Pista with Strawberry',
        desc: "The ice cream industry has developed on the basis of supply of ingredients in reasonable rates. Ice cream is recommended as an effective delivery medium for probiotic organisms.",
        image: "https://bitzngiggles.com/wp-content/uploads/2020/02/Rainbow-Ice-Cream-14-copy.jpg"
    },
];
export default function Products() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    // console.log(cart, "cart")
    useEffect(() => {
        // cartActions.emptyCart(dispatch, []);
    }, [])
    function onAddToCart(item) {
        if (item.quantity) {
            item.quantity = parseInt(item.quantity) + 1
        } else {
            item.quantity = 1
        }

        cartActions.addToCart(dispatch, item);
    }
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={{ flex: 0.3, }}>
                <Image source={{ uri: item.image }} style={{ height: 100, width: 100, borderRadius: 5 }} resizeMode="cover" />
            </View>
            <View style={{ flex: 0.7, marginLeft: 10 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc} numberOfLines={2}>{item.desc}</Text>
                <TouchableOpacity style={styles.button} onPress={() => onAddToCart(item)}>
                    <Text style={styles.buttonTxt}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 10
    },
    title: {
        fontSize: 20,

    },
    button: {
        height: 30,
        width: 150,
        backgroundColor: "lightgreen",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10
    },
    buttonTxt: {
        fontSize: 16,
    },
    desc: {
        fontSize: 12,
        marginTop: 10,
        color: "grey"
    }
});

