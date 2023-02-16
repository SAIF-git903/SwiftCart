import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Header = (props) => {

    const navigation = useNavigation()
    const { title } = props
    const selectedProductQty = useSelector(state => state.addedItems?.length)

    return (
        <View style={{ margin: 20, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 30, color: "black", fontWeight: "bold" }}>{title}</Text>
            {
                props.true
                &&
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.navigate("CartScreen")}>
                    <MaterialCommunityIcons name="cart" size={30} style={{ marginRight: 10 }} color={"black"} />
                    <Text style={{ position: "relative", right: 13, fontWeight: "bold", fontSize: 19, textDecorationLine: "underline", color: "goldenrod" }}>{selectedProductQty}</Text>
                </TouchableOpacity>
            }
        </View>

    )
}

export default Header


export const styles= StyleSheet.create({})