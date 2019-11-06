import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import NoResults from "./components/Explore/NoResults";

class Saved extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <NoResults />
        </ScrollView>
      </View>
    );
  }
}

export default Saved;

const styles = StyleSheet.create({
  container: {
   display: 'flex',
   padding: 20,
   paddingLeft: 10
  },
  scrollView: {
    height: '100%',
  }
});
