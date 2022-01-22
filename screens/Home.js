import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={[tw`text-red-700 bg-green-800 p-5`, styles.text]}>
        home screen
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  text: {
    fontWeight: "bold",
  },
});
