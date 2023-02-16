import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Card } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import Rating from '../components/Rating'
import { removeFromCart } from '../redux/actions'


const CartScreen = () => {


  const navigation = useNavigation()
  const dispatch = useDispatch()
  const addedItems = useSelector(state => state.addedItems)
  const total = useSelector(state => state.totalprice)
  console.log(total)


  function handleRemoveFromCart(item) {

    dispatch(removeFromCart(item))
    console.log(item, "lasd")

  }


  useLayoutEffect(() => {

    navigation.setOptions({
      title: (
        <>
          <View>
            <Text variant='titleLarge'>
              <Text style={{ fontWeight: "bold", fontFamily: "serif", color: "#4B0082", fontSize: 15 }}>Subtotal : </Text>
              <Text style={{ fontWeight: 'bold', color: "black" }}>${Math.floor(total)}.</Text>
              <Text style={{ fontSize: 14 }}>{Number((String((total % 1)).slice(2, 4)))}</Text>
            </Text>
          </View>
        </>
      )
    })

  }, [total])

  return (
    <>
      <ScrollView>
        {
          addedItems.map((data, index) => (
            <Card style={{ margin: 10, paddingTop: 30, paddingHorizontal: 5, backgroundColor: "white" }} key={index} >
              <Card.Title title={data.title} subtitle={data.category} titleStyle={{ fontSize: 25, marginBottom: 5 }} titleNumberOfLines={2} />
              <Card.Content>
                <Image source={{ uri: data.image }} style={{ resizeMode: "contain", width: 200, height: 250, marginTop: 15, marginBottom: 10 }} />
                <Text variant='titleLarge' style={{
                  marginTop: 5,
                  position: "absolute",
                  right: 20,
                  top: 60
                }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black" }}> ${Math.floor(data.price)}.</Text>
                  <Text style={{ fontSize: 14 }}>{Number((String((data.price % 1)).slice(2, 4)))}</Text>
                </Text>
                <Text style={{ marginBottom: 30 }}>{data.description}</Text>
                <View
                  style={{
                    position: "absolute",
                    right: 20,
                    top: 100,
                  }}
                >{<Rating rating={data.rating.rate} count={data.rating.count} />}</View>
                <View style={{
                  position: "absolute",
                  right: 50,
                  top: 170,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 4
                }}>
                  <TouchableOpacity onPress={() => handleRemoveFromCart(data)}>
                    <Image source={{ uri: "https://m.media-amazon.com/images/G/01/x-locale/shopping-cart/trash_icon._CB451653859_.png" }} style={{ resizeMode: "contain", width: 23, height: 23 }} />
                  </TouchableOpacity>
                </View>
              </Card.Content>
              <Card.Actions style={{
                position: "absolute",
                right: 0,
                top: 70,
              }}>
                <Button mode='contained'>Buy Now</Button>
              </Card.Actions>
            </Card>
          ))
        }
      </ScrollView>
    </>
  )
}

export default CartScreen

const styles = StyleSheet.create({})