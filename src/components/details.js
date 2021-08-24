import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Details = ({ props }) => {
  return (
    <View style={styles.container}>
      <Text>first name: {props?.viewDetailItem?.first}</Text>
      <Text>first name: {props?.viewDetailItem?.last}</Text>
      <Text>email: {props?.viewDetailItem?.email}</Text>
      <Text>address: {props?.viewDetailItem?.address}</Text>
      <Text>created: {props?.viewDetailItem?.created}</Text>
      <Text>balance: {props?.viewDetailItem?.balance}</Text>
    </View>
  );
};
