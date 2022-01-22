import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import { store } from "./Redux/store";
import Home from "./screens/Home";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
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
