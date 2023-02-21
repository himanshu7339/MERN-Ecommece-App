import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { Fragment, useState } from "react";
import { color, defaultStyle } from "../styles/style";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCart from "../components/ProductCart";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const categories = [
  { category: "Nice", _id: "8376849918" },
  { category: "Football", _id: "8376849917" },
  { category: "Video Game", _id: "8376849916" },
  { category: "Chess", _id: "8376849915" },
  { category: "Mobile", _id: "8376849912" },
  { category: "Mac/Desktop", _id: "8376849910" },
];
const products = [
  {
    price: 2999,
    name: "HeadPhone",
    _id: "0009999000",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71PhCZEGH7L._SL1500_.jpg",
      },
    ],
  },
  {
    price: 3999,
    name: "Vaamsi Women's Cotton Blend Printed",
    _id: "0009999009",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61hHzoAOjzL._UY741_.jpg",
      },
    ],
  },
  {
    price: 4999,
    name: "I Phone 11 Pro",
    _id: "000999900",
    images: [
      {
        url: "https://www.pngmart.com/files/15/Apple-iPhone-11-Background-PNG.png",
      },
    ],
  },
];
const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id) => {
    console.log("Add To Cart", id);
  };

  console.log(category);
  return (
    <Fragment>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />
        {/* Heading Row */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>
          {/* Search Bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"gray"}
                style={{
                  backgroundColor: color.color2,
                  elevation: 12,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View style={{ flexDirection: "row", height: 80 }}>
          <ScrollView
            horizontal
            contentContainerStyle={{
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? color.color1 : color.color6,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? color.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCart
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={"home"}/>
    </Fragment>
  );
};

export default Home;
