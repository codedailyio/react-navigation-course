import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text>Go To Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("NestedRoute")}>
          <Text>Go To Nested</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile",
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
}

class NestedScreen extends React.Component {
  static navigationOptions = {
    title: "Nested",
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
}

const NestedNav = StackNavigator(
  {
    Nested: {
      screen: NestedScreen,
    },
  },
  {
    headerMode: "none",
  },
);

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    NestedRoute: {
      screen: NestedNav,
      // navigationOptions: {
      //   header: null,
      // },
    },
    Profile: {
      screen: ProfileScreen,
      // navigationOptions: {
      //   header: null,
      // },
    },
  },
  {
    headerMode: "float", // screen none
  },
);

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
