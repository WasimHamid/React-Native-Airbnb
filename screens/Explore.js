import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Dimensions
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Category from "./components/Explore/Category";
import Home from "./components/Explore/Home";

const { height, width } = Dimensions.get("window");

class Explore extends React.Component {
  componentDidMount() {
    this.startHeaderHeight = 80;
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden />
        <View style={{ flex: 1 }}>
          <View style={styles.viewing}>
            <View
              style={{
                position: "absolute",
                top: "30%",
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                elevation: 1
              }}
            >
              <Icon name="ios-search" size={20} />
              <TextInput
                placeholder="Try Birmingham"
                underlineColorAndroid="transparent"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
              />
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <Text style={styles.text}>What can we help you find, Wasim?</Text>
              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require("../assets/home.jpeg")}
                    name="Home"
                  />
                  <Category
                    imageUri={require("../assets/experiences.jpeg")}
                    name="Experiences"
                  />
                  <Category
                    imageUri={require("../assets/restaurant.jpeg")}
                    name="Restaurant"
                  />
                </ScrollView>
              </View>
              <View style={{ marginTop: 1, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                  Introducing Airbnb Plus
                </Text>
                <Text style={{ fontWeight: "100", marginTop: 5 }}>
                  A new selection of homes verified for quality and comfort
                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 10 }}>
                  <Image
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: "cover",
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: "white"
                    }}
                    source={require("../assets/home.jpeg")}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Homes around the world
              </Text>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  padding: 10
                }}
              >
                <Home width={width} />
                <Home width={width} />
                <Home width={width} />
                <Home width={width} />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
  viewing: {
    height: 80,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd"
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    paddingHorizontal: 20
  }
});
