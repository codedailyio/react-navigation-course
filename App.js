import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";

const HomeScreen = class extends React.Component {
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
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerLeft: params.editing ? null : undefined,
      gesturesEnabled: !params.editing,
      headerRight: (
        <TouchableOpacity onPress={() => navigation.setParams({ editing: !params.editing })} style={styles.headerRight}>
          <Text>{params.editing ? "Save" : "Edit"}</Text>
        </TouchableOpacity>
      ),
    };
  };
  render() {
    const { navigation } = this.props;
    const { params = {} } = navigation.state;

    return (
      <View style={styles.container}>
        {!params.editing && <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>}
        {params.editing && <Text>Please save first</Text>}
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
  headerRight: {
    marginRight: 16,
  }
});
