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
  static navigationOptions = props => {
    return {
      title: "Home",
    };
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Profile", {
              completion: 5,
            })
          }
        >
          <Text>Go To Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const ProfileScreen = class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params = {} } = navigation.state;
    return {
      title: `Profile - ${params.completion}/10`,
      headerStyle: [navigationOptions.headerStyle, styles.profileHeader],
      headerRight: (
        <TouchableOpacity
          style={styles.headerRight}
          onPress={() => {
            const nextCompletion = params.completion + 1;
            if (nextCompletion > 10) return navigation.goBack();
            navigation.setParams({ completion: nextCompletion });
          }}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      ),
    };
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
