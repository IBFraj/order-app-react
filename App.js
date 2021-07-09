import React from "react";

import { StyleSheet, Text, View } from "react-native";

import OrderScreen from "./components/Order/OrderScreen";
export default function App() {
  return (
    <View>
      <OrderScreen />
    </View>
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
