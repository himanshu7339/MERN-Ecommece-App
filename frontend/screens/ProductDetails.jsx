import { View, Text } from 'react-native'
import React from 'react'
import { color, defaultStyle } from '../styles/style'
import Header from '../components/Header'


const ProductDetails = ({route}) => {
    console.log(route)
  return (
    <View style={{
        ...defaultStyle,
        padding:0,
        backgroundColor: color.color1
    }}>

    <Header/>
      <Text>ProductDetails</Text>
    </View>
  )
}

export default ProductDetails