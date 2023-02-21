import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { color } from "../styles/style";
import { Avatar } from "react-native-paper";

const Footer = ({ activeRoute = "home" }) => {
  const navigate = useNavigation();
  const isAuthenticated = false;
  const loading = false;
  const navigatationHandler = (key) => {
    switch (key) {
      case 0:
        navigate.navigate("home");
        break;
      case 1:
        navigate.navigate("cart");
        break;
      case 2:
        if (isAuthenticated) navigate.navigate("profile");
        else navigate.navigate("login");
        navigate.navigate("home");
        break;
      default:
        navigate.navigate("home");
        break;
    }
  };

  const avatarOption = {
    color: color.color2,
    size: 50,
    style: {
      backgroundColor: color.color1,
    },
  };
  return (
    loading === false && (
      <View
        style={{
          backgroundColor: color.color1,
          borderTopRightRadius: 120,
          borderTopLeftRadius: 120,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigatationHandler(1)}
          >
            <Avatar.Icon
              color={color.color2}
              size={50}
              style={{
                backgroundColor: color.color1,
              }}
              icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigatationHandler(1)}
          >
            <Avatar.Icon
              {...avatarOption}
              icon={activeRoute === "profile" ? "account" : "account-outline"}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            backgroundColor: color.color2,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            top: -50,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar.Icon
              {...avatarOption}
              icon={activeRoute === "home" ? "home" : "home-outline"}
            />
          </View>
        </View>
      </View>
    )
  );
};

export default Footer;
