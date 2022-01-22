import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: 1,
    icon: "home",
    location: "Home",
    destination: "Home",
  },
  {
    id: 2,
    icon: "briefcase",
    location: "work",
    destination: "London UK",
  },
  {
    id: 3,
    icon: "briefcase",
    location: "work",
    destination: "London UK",
  },
  {
    id: 4,
    icon: "briefcase",
    location: "work",
    destination: "London UK",
  },
];

const Favourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { icon, location, destination } }) => {
        return (
          <TouchableOpacity style={tw`flex-row p-5`}>
            <Icon
              name={icon}
              type="ionicon"
              style={tw`bg-gray-300 rounded-full mr-4 p-3`}
              color="white"
              size={18}
            />
            <View>
              <Text>{location}</Text>
              <Text>{destination}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Favourites;

const styles = StyleSheet.create({});
