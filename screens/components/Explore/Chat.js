import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { GiftedChat } from "react-native-gifted-chat";

class Chat extends React.Component {
  state = { messages: [] };

  render() {
    return <GiftedChat messages={this.state.messages} user={this.user} />;
  }
}

export default Chat;
