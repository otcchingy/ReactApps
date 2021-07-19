import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Ionicons} from "@expo/vector-icons";

const TransactionItem = React.memo(({icon, type, description, amount}) => {

    const {
        container,
        typeStyle,
        descriptionStyle,
        profileCircle,
        amountStyle
    } = styles;

    return (
        <View style={container}>
            <View style={profileCircle}>
                <Ionicons name={icon} size={18} color={'#000'}/>
            </View>
            <View style={{marginEnd: 8, flex: 1, height: 30}}>
                <Text style={typeStyle}>{type}</Text>
                <View style={{flexDirection: "row"}}>
                    <Text style={descriptionStyle}>{description}</Text>
                    <Text style={amountStyle}>{amount}</Text></View>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 2
    },
    profileCircle: {
        width: 40,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#E6E7F9',
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 8
    },
    typeStyle: {
        flex: 1,
        fontSize: 12,
        fontWeight: "bold",
    },
    descriptionStyle: {
        color: '#b1b1b1',
        fontSize: 11,
        marginTop: 1,
        fontWeight: '200',
        marginEnd: 8,
        flex: 1
    },
    amountStyle: {
        fontSize: 10,
        marginTop: 1,
        fontWeight: "bold",
    }
});

export default TransactionItem;
