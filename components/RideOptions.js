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
import { useSelector } from "react-redux";
import { selectTimeTravel } from "../Redux/slices/navSlice";

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
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "uber-x-125",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptions = () => {
  const navigation = useNavigation();
  const [select, setSelect] = useState("");
  const travelTimeInfo = useSelector(selectTimeTravel);
  return (
    <View style={tw`bg-white flex-1`}>
      <View style={tw`relative`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5`}>
          <Icon name="chevron-left" type="fontawesome" size={28} />
        </TouchableOpacity>
        <Text style={tw`text-center text-xl py-2`}>
          Select a Ride {travelTimeInfo?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => setSelect(item.title)}
              style={tw`flex-row items-center justify-around   mx-2 rounded-lg 
               `}>
              <View>
                <Text style={tw`font-bold`}>{item.title}</Text>
                <Text style={tw`font-bold`}>
                  {travelTimeInfo?.duration.text} travel time
                </Text>
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
                {/**fot price */}
                <Text style={tw`font-bold text-lg`}>
                  {new Intl.NumberFormat("en-gb", {
                    style: "currency",
                    currency: "GBP",
                  }).format(
                    (travelTimeInfo?.duration.value * item.multiplier) / 100
                  )}
                </Text>
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
