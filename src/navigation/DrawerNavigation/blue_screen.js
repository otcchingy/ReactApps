import React from "react";

//src
import {createDrawerNavigator} from "@react-navigation/drawer";
import Overview from "../../screens_blue/Overview";
import Login from "../../screens_blue/Login";
import RecentTransactions from "../../screens_blue/RecentTransactions";


const Drawer = createDrawerNavigator();


function BlueScreenDrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="RecentTransactions">
            <Drawer.Screen name="Login" component={Login}/>
            <Drawer.Screen name="Overview" component={Overview}/>
            <Drawer.Screen name="RecentTransactions" component={RecentTransactions}/>
        </Drawer.Navigator>
    );
}

export default BlueScreenDrawerNavigation;
