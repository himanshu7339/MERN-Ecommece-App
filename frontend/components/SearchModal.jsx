import {
  View,
  Text,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import { color } from "../styles/style";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Headline, Searchbar } from "react-native-paper";

const SearchModal = ({
  searchQuery,
  setActiveSearch,
  setSearchQuery,
  products = [],
}) => {
  const navigate = useNavigation();
  const backAction = () => {
    setSearchQuery("");
    setActiveSearch(false);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackpress", backAction);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        zIndex: 100,
        backgroundColor: color.color2,
        padding: 35,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Searchbar
          placeholder="Search..."
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
          style={{
            marginTop: 20,
          }}
        />

        <ScrollView>
          <View
            style={{
              paddingVertical: 40,
              paddingHorizontal: 10,
            }}
          >
            {products.map((i) => (
              <SearchItem
                key={i._id}
                imgSrc={i.images[0]?.url}
                name={i.name}
                price={i.price}
                handler={() =>
                  navigate.navigate("productdetails", { id: i._id })
                }
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const SearchItem =({ price, name, imgSrc, handler }) =>(
      <TouchableOpacity onPress={handler}>
        <View
          style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: color.color2,
            elevation: 5,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row",
            marginVertical: 30,
          }}
        >
          <Image
            source={{
              uri: imgSrc,
            }}
            style={{
              width: 80,
              height: 80,
              position: "absolute",
              resizeMode: "contain",
              top: -15,
              left: 10,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
          <View style={{ width: "80%", paddingHorizontal: 30 }}>
            <Text numberOfLines={1}>{name}</Text>
            <Headline
              style={{
                fontWeight: "900",
              }}
            >
              ₹{price}
            </Headline>
          </View>
        </View>
      </TouchableOpacity>
    );

export default SearchModal;
