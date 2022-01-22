import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./Redux/store";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Map from "./screens/Map";
const Stack = createNativeStackNavigator();
export default function App() {
  const headerOptions = {
    headerShown: false,
    // headerStyle: {
    //   backgroundColor: "#f4511e",
    // },
    // headerTintColor: "#fff",
    // headerTitleStyle: {
    //   fontWeight: "bold",
    // },
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Map"
              component={Map}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
