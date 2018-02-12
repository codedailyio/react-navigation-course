import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text>Go To Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

const ModalScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back From Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

const MainNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    headerMode: "none",
  },
);

const ModalNavigator = StackNavigator(
  {
    Main: {
      screen: MainNavigator,
    },
    Modal: {
      screen: ModalScreen,
    },
  },
  {
    mode: "modal",
  },
);

export default class App extends React.Component {
  render() {
    return <ModalNavigator />;
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
