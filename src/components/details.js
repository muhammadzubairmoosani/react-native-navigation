import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as Analytics from "expo-firebase-analytics";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Details = ({ props, navigation }) => {
  useEffect(() => {
    const activeAnalytics = async () => {
      try {
        await Analytics.setCurrentScreen("Details");
      } catch (e) {
        console.log(e.message);
      }
    };

    activeAnalytics();
  }, []);

  const _onPress = async () => {
    try {
      await Analytics.logEvent("GoToListScreenButton", {
        name: "user-details",
        screen: "Details",
        purpose: "view the user list",
      });
    } catch (e) {
      console.log(e.message);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>first name: {props?.viewDetailItem?.first}</Text>
      <Text>first name: {props?.viewDetailItem?.last}</Text>
      <Text>email: {props?.viewDetailItem?.email}</Text>
      <Text>address: {props?.viewDetailItem?.address}</Text>
      <Text>created: {props?.viewDetailItem?.created}</Text>
      <Text>balance: {props?.viewDetailItem?.balance}</Text>
      <Button title='Go back' onPress={_onPress} />
    </View>
  );
};
