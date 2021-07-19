import React from "react";

//src
import Conversations from "../../screens_pink/Conversation";
import Profile from "../../screens_pink/Profile";
import Home from "../../screens_pink/Home";
import {createDrawerNavigator} from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();


function PinkScreenDrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Conversations">
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Conversations" component={Conversations}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    );
}

export default PinkScreenDrawerNavigation;
