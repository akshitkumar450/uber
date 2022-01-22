import { Image, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import SearchBar from "../components/SearchBar";
const Home = () => {
  return (
    <View style={tw`bg-gray-100 h-full`}>
      <View style={tw`p-5 pb-0 `}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <SearchBar />
        <NavOptions />
      </View>
    </View>
  );
};

export default Home;
