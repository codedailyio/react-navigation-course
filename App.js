import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text>Go To Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};


const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

const CustomDrawerContentComponent = props => (
  <ScrollView style={{ flex: 1, paddingTop: 40 }}>
    <TouchableOpacity onPress={() => props.navigation.navigate("DrawerClose")}>
      <Text>Close Drawer</Text>
    </TouchableOpacity>
    <DrawerItems {...props} />
  </ScrollView>
);

const RootNavigator = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    contentComponent: CustomDrawerContentComponent,
    gesturesEnabled: true,
    drawerPosition: "left",
    // drawerOpenRoute: "OpenDrawer",
    navigationOptions: {
      // drawerLockMode: "locked-open",
    },
  },
);

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
    /*
      screenProps={{
        drawerLockMode: "locked-closed",
      }}
    */
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
