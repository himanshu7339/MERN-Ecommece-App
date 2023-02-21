import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { color, defaultStyle } from "../styles/style";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = ({ route }) => {
  console.log(route);

  const isCarousel = useRef(null);
  const images = [
    {
      id: "8888888888",
      url: "https://m.media-amazon.com/images/I/61rDkVJYNrL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: "8888888088",
      url: "https://m.media-amazon.com/images/I/71afXwiHaBL._SL1500_.jpg",
    },
  ];
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: color.color1,
      }}
    >
      <Header back={true} />
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
);

const style = StyleSheet.create({
  container: { backgroundColor: color.color1, width: ITEM_WIDTH,height:380,paddingVertical:40 },

  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
});
export default ProductDetails;
