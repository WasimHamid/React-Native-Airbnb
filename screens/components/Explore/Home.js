import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import StarRating from "react-native-star-rating";

class Home extends React.Component {
  render() {
    return (
      <View
        style={{
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 - 30,
          borderWidth: 0.5,
          borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover"
            }}
            source={require("../../../assets/home.jpeg")}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            paddingLeft: 10
          }}
        >
          <Text style={{ fontSize: 10, color: "#b63838" }}>
            PRIVATE ROOM - 2 BEDS
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            The Cozy Palace
          </Text>
          <Text style={{ fontSize: 10 }}>{this.props.price}</Text>
          <StarRating
            disable={true}
            maxStars={5}
            rating={this.props.rating}
            starSize={10}
          />
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
