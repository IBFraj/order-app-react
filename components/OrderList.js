import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

const OrderList = (props) => {
  const [order, setOrder] = useState([
    { name: "pizza", id: "2" },
    { name: "pizza", id: "2" },
    { name: "pizza", id: "2" },
    { name: "pizza", id: "2" },
    { name: "pizza", id: "2" },
    { name: "pizza", id: "2" },
    { name: "pizza", id: "2" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {order.map((item) => (
          <View Key={item.Key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    padingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    /* marginHorizontal:10,
        marginTop: 24,*/
  },
});

export default OrderList;
