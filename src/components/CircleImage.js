import React from 'react';
import {Image, StyleSheet} from 'react-native';

const CircleImage = (props) => {
    const {
        container,
    } = styles;

    const {size, color, source} = props

    return (
        <Image source={source} style={[container, props.style, {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color
        }]}/>
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

export default CircleImage;
