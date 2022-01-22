import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const data = [
  {
    id: "uber-x-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "uber-x-124",
    title: "Uber XL",
    multiplier: 1,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "uber-x-125",
    title: "Uber LUX",
    multiplier: 1,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptions = () => {
  const navigation = useNavigation();
  const [select, setSelect] = useState("");
  console.log(select);
  return (
    <View style={tw`bg-white flex-1`}>
      <View style={tw`relative`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5`}>
          <Icon name="chevron-left" type="fontawesome" size={28} />
        </TouchableOpacity>
        <Text style={tw`text-center text-xl py-2`}>Select a Ride</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => setSelect(item.title)}
              style={tw`flex-row items-center justify-around   mx-2 rounded-lg 
                ${item?.title === select ? "bg-gray-200" : ""}`}>
              <View>
                <Text style={tw`font-bold`}>{item.title}</Text>
                <Text style={tw`font-bold`}>{item.multiplier}</Text>
                <Text style={tw`font-bold`}>travel time..</Text>
              </View>
              <View>
                <Image
                  style={{
                    width: 120,
                    height: 80,
                    resizeMode: "contain",
                  }}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>
              <View>
                <Text style={tw`font-bold text-lg`}>$99</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <View>
        <TouchableOpacity
          disables={!select}
          style={tw`bg-black ${!select && "bg-gray-200"}`}>
          <Text style={tw`text-center text-xl text-white my-2`}>
            Choose a {select}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RideOptions;

const styles = StyleSheet.create({});
