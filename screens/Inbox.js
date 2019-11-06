import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Main from "./components/Explore/Main";
import Chat from "./components/Explore/Chat";
import { createStackNavigator } from "react-navigation";

const Inbox = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat }
});

export default Inbox;
