import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import {Ionicons} from "@expo/vector-icons";

const ChatItem = React.memo(({imageUrl, username, lastMessage}) => {

    const {
        container,
        usernameStyle,
        lastMessageStyle,
        profileCircle
    } = styles;

    return (
        <View style={container}>
            <TouchableWithoutFeedback onPress={() => toggleTodo(id)}>
                <View style={profileCircle}>
                    {/*<Image style={profileCircle} source={imageUrl}/>*/}
                    <Ionicons name={'person'} size={18} color={'#fff'}/>
                </View>
            </TouchableWithoutFeedback>
            <View style={{padding: 8}}>
                <Text style={usernameStyle}>{username}</Text>
                <Text style={lastMessageStyle}>{lastMessage}</Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 8,
    },
    profileCircle: {
        width: 45,
        height: 45,
        borderRadius: 23,
        backgroundColor: '#EF76AF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    usernameStyle: {
        flex: 1,
        fontSize: 13,
        fontWeight: '500',
    },
    lastMessageStyle: {
        color: '#CED9E4',
        fontSize: 11,
        marginTop: 3,
        fontWeight: '200'
    }
});

export default ChatItem;
