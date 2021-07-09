import * as React from "react";

import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import NewOrder from "./NewOrder";
import RejectedOrder from "./RejectedOrder";
import ValidatedOrder from "./ValidatedOrder";

const Tab = createMaterialTopTabNavigator();
export default function OrderScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="NewOrder" component={NewOrder} />
        <Tab.Screen name="ValidatedOrder" component={ValidatedOrder} />
        <Tab.Screen name="RejectedOrder" component={RejectedOrder} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
