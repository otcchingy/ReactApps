import React from 'react';
import {StyleSheet, View} from 'react-native';

const Circle = (props) => {
    const {
        container,
    } = styles;

    const {size, color} = props

    return (
        <View style={[container, props.style, {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color
        }]}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: 250,
        backgroundColor: "black",
        borderRadius: 200 / 2,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Circle;
