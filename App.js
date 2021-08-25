import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, List } from "./src/components";
import * as Analytics from "expo-firebase-analytics";

const Stack = createNativeStackNavigator();

export default function App() {
  const [viewDetailItem, setViewDetailItem] = useState({});

  useEffect(() => {
    // Analytics.setDebugModeEnabled(true)

    const activeAnalytics = async () => {
      try {
        await Analytics.setAnalyticsCollectionEnabled(true);
        
      await  Analytics.setUserId(Date.now())
        // await Analytics.setUserId('123')

        await Analytics.setUserProperties({
          firstname: "zubair",
          lastname: "moosani"
        });
      } catch (e) {
        console.log(e.message);
      }
    };

    activeAnalytics();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='List'>
          {(props) => <List {...props} props={{ setViewDetailItem }} />}
        </Stack.Screen>
        <Stack.Screen name='Details'>
          {(props) => <Details {...props} props={{ viewDetailItem }} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
