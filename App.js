import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

//src
import PinkScreenDrawerNavigation from "./src/navigation/DrawerNavigation/pink_screen";
import BlueScreenDrawerNavigation from "./src/navigation/DrawerNavigation/blue_screen";


export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="auto" />
        {/*<PinkScreenDrawerNavigation />*/}
        <BlueScreenDrawerNavigation />
    </NavigationContainer>
  );
}
