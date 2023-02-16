import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import {  useSelector } from 'react-redux'
import { Card } from 'react-native-paper'
import { addToCart } from '../redux/actions'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'

const WishList = () => {

  const [data, setData] = useState([])
  const favorite = useSelector(state => state.favorite)
  const navigation = useNavigation()

  console.log(data)
  
  setTimeout(() => {
    setData(favorite)
  }, 500);


  function handleAddToCart(cartItem) {
    dispatch(addToCart(cartItem))
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <>
          <Header title={"Favorite"} />
        </>
      )
    })
  }, [])

  return (
    <View>
      <ScrollView>
        {
          data?.map((cartItem, index) => (
            <Card style={{ margin: 10, paddingTop: 30, paddingHorizontal: 5, backgroundColor: "white" }} key={index}>
              <Card.Title title={cartItem.title} titleStyle={{ fontSize: 25, marginBottom: 5 }} titleNumberOfLines={2} />
              <Card.Content>
                <Image source={{ uri: cartItem.image }} style={{
                  resizeMode: "contain",
                  width: 150,
                  height: 200,
                  marginTop: 15,
                  marginBottom: 10,
                }} />
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
                top: 120
              }}>
                <Button>Buy Now</Button>
              </Card.Actions>
            </Card>
          ))
        }
      </ScrollView>
    </View>
  )
}

export default WishList

const styles = StyleSheet.create({})