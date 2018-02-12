import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFF",
    borderBottomWidth: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const HomeScreen = class extends React.Component {
  static navigationOptions = {
    // title: "Home",
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text>Go To Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const ProfileScreen = class extends React.Component {
  static navigationOptions = {
    // title: "Profile",
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        // title: "Home",
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        // title: "Profile",
      },
    },
  },
  {
    navigationOptions: {
      title: "Global Navigation",
      headerStyle: styles.header,
      headerTintColor: "#000",
      headerBackTitle: null,
    },
  },
);
export default class App extends React.Component {
  render() {
    return <RootNavigator />;
  }
}