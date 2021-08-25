import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import * as Analytics from "expo-firebase-analytics";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: 400,
  },
});

export const List = ({ navigation, props }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
    )
      .then((res) => res.json())
      .then((json) => setList(json))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const activeAnalytics = async () => {
      try {
        await Analytics.setCurrentScreen("List");
      } catch (e) {
        console.log(e.message);
      }
    };

    activeAnalytics();
  }, []);

  const _onPress = async (index) => {
    try {
      await Analytics.logEvent("GoToDetailsScreenButton", {
        name: "user-list",
        screen: "List",
        purpose: "view the user details",
      });
    } catch (e) {
      console.log(e.message);
    }

    const viewDetailItem = list.splice(index, 1);
    props.setViewDetailItem(viewDetailItem[0]);

    navigation.navigate("Details");
  };

  return (
    <View style={styles.container}>
      <Text>
        <FlatList
          data={list}
          renderItem={({ item, index }) => (
            <Text
              key={index}
              onPress={() => _onPress(index)}
              style={styles.item}
            >{`${item.first} ${item.last}`}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Text>
    </View>
  );
};
