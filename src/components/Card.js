import React from 'react';
import {StyleSheet, View} from 'react-native';

const Card = (props) => {
    const {
        container,
    } = styles;

    return (
        <View style={[container, props.style]}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        margin: 8,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 8,
        paddingHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8.84,
        elevation: 5
    }
});

export default Card;
