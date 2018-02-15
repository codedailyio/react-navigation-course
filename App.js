import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFF",
    borderBottomWidth: 0,
  },
  profileHeader: {
    borderBottomWidth: 2,
  },
  headerRight: {
    marginRight: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const HomeScreen = class extends React.Component {
  state = {};
  componentDidMount() {
    this.didFocus = this.props.navigation.addListener("willFocus", e => {
      if (this.left) {
        this.setState({
          message: "Hey welcome back home",
        });
      }
    });
    this.willBlur = this.props.navigation.addListener("didBlur", e => {
      this.left = true;
    });
  }

  componentWillUnmount() {
    this.didFocus.remove();
    this.willBlur.remove();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text>Go To Profile</Text>
        </TouchableOpacity>
        <Text>{this.state.message}</Text>
      </View>
    );
  }
};

const ProfileScreen = class extends React.Component {
  componentDidMount() {
    this.didFocus = this.props.navigation.addListener("didFocus", e => {
      console.log(e);
    });
  }

  componentWillUnmount() {
    this.didFocus.remove();
  }
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
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
  }
}
