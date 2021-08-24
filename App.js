import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, List } from "./src/components";

const Stack = createNativeStackNavigator();

export default function App() {
  const [viewDetailItem, setViewDetailItem] = useState({});

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='List'>
          {(props) => (
            <List {...props} props={{ setViewDetailItem }} />
          )}
        </Stack.Screen>
        <Stack.Screen name='Details'>
          {(props) => <Details {...props} props={{ viewDetailItem }} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

