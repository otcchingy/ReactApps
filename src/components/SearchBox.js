import React from 'react';
import {StyleSheet, TextInput, View,} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBox = (props) => {
    const {
        container,
        iconContainer,
        input
    } = styles;

    return (
        <>
            <View style={[container, props.style]}>
                <View style={iconContainer}>
                    <Feather name={'search'} size={16} color="#fff"/>
                </View>
                <TextInput
                    style={[input]}
                    placeholder={"Search friend"}
                    multiline={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    blurOnSubmit={false}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 8,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: "center",
        borderRadius: 14,
        paddingHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8.84,
        elevation: 5
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#FF82B1',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 12,
        marginLeft: 16,
        color: '#102a43',
    }
});

export default SearchBox;
