import { ScrollView, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fontisto from "react-native-vector-icons/Fontisto"
import { Card, Button, Text } from "react-native-paper"
import { addToCart } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../redux/actions'
import Notification from './Notification'
import Notifier from './Notifier'
import { useNavigation } from '@react-navigation/native'

const CardCom = (props) => {

    const { data } = props
    const dispatch = useDispatch()
    const [notify, setNotify] = useState(false)
    const navigation = useNavigation()

    function handleFavorite(cartItem) {
        dispatch(addFavorite(cartItem))
        console.log(cartItem)
    }

    function handleAddToCart(cartItem) {
        dispatch(addToCart(cartItem))
        setNotify(true)

        setTimeout(() => {
            setNotify(false)
        }, 1500);
    }

    function handlePicZoomIn(image) {
        navigation.navigate("Image", { image })
    }

    return (
        <>
            <View>
                {notify && <Notifier />}
                <ScrollView>
                    {
                        data?.map((cartItem, index) => (
                            <Card style={{
                                margin: 10,
                                paddingTop: 30,
                                paddingHorizontal: 5,
                                backgroundColor: "white"
                            }} key={index}>
                                <Card.Title title={cartItem.title} titleStyle={{ fontSize: 25, marginBottom: 5 }} titleNumberOfLines={2} />
                                <Card.Content>
                                    <TouchableOpacity onPress={() => handlePicZoomIn(cartItem.image)}>
                                        <Image source={{ uri: cartItem.image }} style={{
                                            resizeMode: "contain",
                                            width: 150,
                                            height: 200,
                                            marginTop: 15,
                                            marginBottom: 10,
                                        }} />
                                    </TouchableOpacity>
                                    <Text style={{
                                        position: "absolute",
                                        right: 20,
                                        top: 20,
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        color: "#4B0082",
                                        marginLeft: 5
                                    }}>{(cartItem.category).charAt(0).toUpperCase() + cartItem.category.slice(1)}</Text>
                                    <Text variant='titleLarge' style={{
                                        marginTop: 5,
                                        position: "absolute",
                                        right: 20,
                                        top: 40
                                    }}>
                                        <Text style={{ fontWeight: 'bold', color: "black" }}>${Math.floor(cartItem.price)}.</Text>
                                        <Text style={{ fontSize: 14 }}>{Number((String((cartItem.price % 1)).slice(2, 4)))}</Text>
                                    </Text>
                                    <View style={{
                                        position: "absolute",
                                        right: 20,
                                        top: 80
                                    }}>
                                        <TouchableOpacity onPress={() => handleFavorite(cartItem)}
                                            style={{ flexDirection: "row", borderWidth: 1, borderColor: "black", padding: 5, borderRadius: 5 }}>
                                            <View>
                                                <Fontisto name="favorite" size={20} color="#4B0082" />
                                            </View>
                                            <Text style={{ marginLeft: 2 }}>Favorite</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text>{cartItem.description}</Text>
                                </Card.Content>
                                <Card.Actions>
                                    <Button mode='contained' icon="cart-plus" onPress={() => handleAddToCart(cartItem)}>Add to Cart</Button>
                                </Card.Actions>
                                <Card.Actions style={{
                                    marginBottom: 10,
                                    position: "absolute",
                                    right: 5,
                                    top: 170
                                }}>
                                    <Button>Buy Now</Button>
                                </Card.Actions>
                            </Card>
                        ))
                    }
                </ScrollView>
            </View>
        </>
    )
}

export default CardCom

