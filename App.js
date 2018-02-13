import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated } from "react-native";

import { StackNavigator } from "react-navigation";

const HomeScreen = class extends React.Component {
  static navigationOptions = props => {
    return {
      title: "Home",
      headerStyle: {
        backgroundColor: props.screenProps.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["#FFF", "#ff6347"],
        }),
      },
    };
  };
  handleError = () => {
    Animated.timing(this.props.screenProps.animation, {
      toValue: 1,
      duration: 250,
    }).start();
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text>Go To Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleError()}>
          <Text>Simulate Error</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const ProfileScreen = class extends React.Component {
  static navigationOptions = props => {
    return {
      title: "Profile",
      headerStyle: {
        backgroundColor: props.screenProps.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["#FFF", "#6347ff"],
        }),
      },
    };
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.screenProps.animation.setValue(0)}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
});

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0),
  };
  render() {
    return (
      <RootNavigator
        screenProps={{
          animation: this.state.animation,
        }}
      />
    );
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
