import React from "react";
import {Pressable, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import ConversationsList from "../../components/ConversationList";
import {Ionicons} from "@expo/vector-icons";
import SearchBox from "../../components/SearchBox";

const Conversations = ({navigation}) => {

    const {
        container,
        pageTitleStyle,
        fabStyle,
        button
    } = styles;

    return (
        <View style={container}>
            <View style={{flexDirection: "row", padding: 8}}>
                <Pressable
                    onPress={() => {
                        navigation.toggleDrawer();
                    }}
                    style={[button]}
                >
                    <Ionicons name={'arrow-back'} color={'#797979'} size={24}/>
                </Pressable>
                <View style={{flex: 1}}/>
                <Pressable
                    onPress={() => {
                    }}
                    style={[button]}
                >
                    <Ionicons name={'ios-ellipsis-vertical'} color={'#797979'} size={20}/>
                </Pressable>
            </View>
            <Text style={pageTitleStyle}>Conversation</Text>
            <SearchBox style={{margin: 0, marginBottom: 32, marginHorizontal: 8}}/>
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <ConversationsList/>
                </View>
            </View>
            <TouchableOpacity style={fabStyle} onPress={() => {
                navigation.navigate('NewTask', {item: {}})
            }}>
                <Ionicons name={'add'} color={'#fff'} size={20}/>
            </TouchableOpacity>
        </View>
    );
};

export default Conversations;
