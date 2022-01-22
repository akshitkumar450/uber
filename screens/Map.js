import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import MapComp from "../components/MapComp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptions from "../components/RideOptions";
const Stack = createNativeStackNavigator();

const Map = () => {
  return (
    <View>
      <View style={tw`h-1/2 `}>
        <MapComp />
      </View>
      <View style={tw`h-1/2 bg-blue-400`}>
        {/**nested navigation by this we can naigate to new  page within this parent component */}
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptions}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
