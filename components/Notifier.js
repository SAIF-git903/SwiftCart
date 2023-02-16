import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useSelector } from 'react-redux'

const Notifier = () => {

    const subTotal = useSelector(state => state.totalprice)

    return (
        <>
            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", paddingVertical: 10, margin: 5, borderWidth: 1, borderColor: "grey", borderRadius: 7 }}>
                <MaterialCommunityIcons name="check-circle" size={25} color={"green"} style={{ marginLeft: 8, marginRight: 8 }} />
                <Text style={{ fontSize: 16, fontWeight: '500' }}>Added to Cart</Text>
                <View style={{ flexDirection: "row", position: "absolute", right: 10 }}>
                    <Text style={{ fontWeight: "bold", color: "black", fontSize: 16 }}>Cart Subtotal : </Text>
                    <Text style={{ fontWeight: 'bold', color: "black" }}>${Math.floor(subTotal)}.</Text>
                    <Text style={{ fontSize: 14 }}>{Number((String((subTotal% 1)).slice(2, 4)))}</Text>
                </View>
            </View>
        </>
    )
}

export default Notifier
