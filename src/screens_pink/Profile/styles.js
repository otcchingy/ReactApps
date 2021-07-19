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
    textSmall: {
        fontSize: 12,
        textAlign: "center",
        color: '#64819D',
    },
    textLarge: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    },
    textMedium: {
        fontSize: 24,
        fontWeight: "200",
        textAlign: "center",
        fontStyle: "normal",
    },
    todoLogo: {
        marginBottom: 20,
        width: 70,
        height: 70
    },
    iconContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF82B1',
        marginBottom: 24,
        alignSelf: "center",
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
