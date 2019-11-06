import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

class NoResults extends React.Component {
  render() {
    return (
      <View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>Saved</Text>
          <Text style={styles.description}>
            Not every day is filled with adventures, but you can start planning
            for the next one.
          </Text>
          <Text style={styles.description}>
            Tap the heart on any home to start saving your favorites here.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default NoResults;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 20,
    color: "black",
    paddingLeft: 20,
    paddingRight: 20
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "black",
    paddingLeft: 20,
    paddingRight: 20
  }
});
