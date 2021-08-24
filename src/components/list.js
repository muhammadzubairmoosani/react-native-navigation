import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: 400
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

  const _onPress = (index) => {
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
              onPress={() => _onPress(index)}
              style={styles.item}
            >{`${item.first} ${item.last}`}</Text>
          )}
        />
      </Text>
    </View>
  );
};
