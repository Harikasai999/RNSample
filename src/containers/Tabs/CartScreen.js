import React, { useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { actions as cartActions } from './../../redux/cart';

export default function CartScreen() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    // console.log(cart, "cart")

    function removeItem(item) {
        cartActions.removeFromCart(dispatch, item);
    }
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={{ flex: 0.3, }}>
                <Image source={{ uri: item.image }} style={{ height: 100, width: 100, borderRadius: 5 }} resizeMode="cover" />
            </View>
            <View style={{ flex: 0.7, marginLeft: 10 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc} numberOfLines={2}>{item.desc}</Text>
                <TouchableOpacity style={styles.button} onPress={() => removeItem(item)}>
                    <Text style={styles.buttonTxt}>Remove from Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    return (
        <View>
            {cart.cartItems && cart.cartItems.length > 0 ? (
                <FlatList
                    data={cart.cartItems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            ) : (
                    <Text style={styles.noText}>Your Cart is Empty</Text>
                )}

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
    },
    noText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    }
});

