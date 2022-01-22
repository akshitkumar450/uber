import { FlatList, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
const data = [
  {
    id: "123",
    title: "get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];
const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => {
        return (
          <TouchableOpacity>
            <View style={tw`bg-gray-200 mr-5 p-2 rounded-lg`}>
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
  );
};

export default NavOptions;
