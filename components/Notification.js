import { Text, View, Image } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import React from 'react'
import { Button } from 'react-native-paper'

const Notification = () => {
    
    
    return (
        <>
            <View style={{ flexDirection: "row", backgroundColor: "#eee", padding: 17 }}>
                <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
                    <Image source={{ uri: "https://m.media-amazon.com/images/I/71Td07yjoUL._AC_AA300_.jpg" }}
                        style={{ resizeMode: "contain", width: 70, height: 70 }} />
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialCommunityIcons name="check-circle" size={25} color={"green"} style={{ marginLeft: 8, marginRight: 8 }} />
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>Added to Cart</Text>
                    </View>
                </View>
                <View style={{ position: "absolute", top: 15, right: 15 }}>
                    <Text style={{ fontWeight: "bold", color: "black", fontSize: 18 }}>Cart Subtotal</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 13, marginRight: 2, color: "black" }}>$</Text>
                        <Text style={{ fontWeight: "600", color: "black", fontSize: 17 }}>98.45</Text>
                    </View>
                </View>
                <View style={{ position: "absolute", top: 75, right: 8 }}>
                    <Button mode='contained'>Go to Cart</Button>
                </View>
            </View>
        </>
    )
}

export default Notification
