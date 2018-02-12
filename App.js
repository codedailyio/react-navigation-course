import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { StackNavigator, NavigationActions } from "react-navigation";

const resetAction = NavigationActions.reset({
  index: 0,
  // key: null,
  actions: [NavigationActions.navigate({ routeName: "Home" })],
});

const HomeScreen = class extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("NavItem")}>
          <Text>Add NavItem</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Buyer")}>
          <Text>Go To Buy Stack</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const BuyScreen = class extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.replace("Confirm")}>
          <Text>Confirm Purchase</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const ConfirmScreen = class extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.dispatch(resetAction)}>
          <Text>Reset Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const NavItemScreen = class extends React.Component {
  static navigationOptions = props => {
    const { params = {} } = props.navigation.state;
    return {
      title: params.title,
    };
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("NavItem")}>
          <Text>Add Another Stack Item!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("Home")}>
          <Text>Replace with Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.setParams({
              title: Date.now(),
            })
          }
        >
          <Text>Set Date Title</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.dispatch(resetAction)}>
          <Text>Reset it All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const BuyNavigator = StackNavigator(
  {
    Buy: {
      screen: BuyScreen,
    },
    Confirm: {
      screen: ConfirmScreen,
    },
  },
  {
    headerMode: "none",
  },
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  NavItem: {
    screen: NavItemScreen,
  },
  Buyer: {
    screen: BuyNavigator,
  },
});

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
