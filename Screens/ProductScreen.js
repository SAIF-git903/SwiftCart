import React, {  useState } from 'react'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import CardCom from '../components/Card'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { requestApiData } from '../redux/actions'

function ProductScreen() {

  const [data, setData] = useState([])
  const navigation = useNavigation()
  const cartData = useSelector(state => state.cartItems)
  const addedItems = useSelector(state => state)
  console.log(addedItems)
  const dispatch = useDispatch()

  setTimeout(() => {
    setData(cartData)
  }, 500);


  useLayoutEffect(() => {

    navigation.setOptions({
      header: () => (
        <>
          <Header title={"SwiftCart"} true={true}  />
        </>
      )
    })
    dispatch(requestApiData())
  }, [])


  return (
    <>
      <StatusBar backgroundColor={"#eee"} barStyle="dark-content" />
      <CardCom data={data} />
    </>
  )
}

export default ProductScreen