import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFDFF'
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    pageTitleStyle: {
        fontWeight: "bold",
        fontSize: 24,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 0,
        marginBottom: 16,
    },
    fabStyle: {
        width: 45,
        height: 45,
        borderRadius: 23,
        backgroundColor: '#FF82B1',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 32,
        right: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5
    }
});

export default Styles;
