import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import MapComp from "../components/MapComp";

const Map = () => {
  return (
    <View>
      <View style={tw`h-1/2 `}>
        <MapComp />
      </View>
      <View style={tw`h-1/2 bg-blue-400`}></View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
