import { FlatList, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../Redux/slices/navSlice";
import Favourites from "./Favourites";

const data = [
  {
    id: "123",
    title: "get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "Map",
  },
  {
    id: "456",
    title: "order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];
const NavOptions = () => {
  // instead of destructuring as props use hook
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              disabled={!origin}
              onPress={() => navigation.navigate(item.screen)}>
              <View
                style={tw`bg-gray-200 mr-5 p-2 rounded-lg ${
                  !origin ? "bg-red-400" : "bg-green-500"
                }`}>
                <Image
                  style={{
                    width: 120,
                    height: 120,
                    resizeMode: "contain",
                  }}
                  source={{
                    uri: item.image,
                  }}
                />
                <Text style={tw`font-semibold text-lg mt-2`}>{item.title}</Text>

                <Icon
                  style={tw`p-2 rounded-full w-10 bg-black`}
                  type="antdesign"
                  color="white"
                  name="arrowright"
                  size={20}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Favourites />
    </View>
  );
};

export default NavOptions;
