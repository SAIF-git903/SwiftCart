import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const ImageCom = (props) => {


    const { route } = props
    console.log(props)

    return (
        <View style={{ backgroundColor: "white" }}>
            <Image source={{ uri: route?.params?.image }} style={{ resizeMode: "contain", width: "100%", height: "100%" }} />
        </View>
    )
}

export default ImageCom

