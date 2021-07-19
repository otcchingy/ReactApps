import React from "react";
import {Image, Pressable, Text, View} from "react-native";
import styles from "./styles";
import Styles from "./styles";
import {Ionicons} from "@expo/vector-icons";

const Profile = ({navigation}) => {

    const {
        container,
        pageTitleStyle,
        button
    } = styles;

    return (
        <View style={container}>

            <View style={{
                backgroundColor: '#FBFDFF',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.15,
                shadowRadius: 16.84,
                elevation: 5,
                borderRadius: 16,
                flex: 4,
            }}>

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

                <Text style={pageTitleStyle}>My Profile</Text>

                <View style={[Styles.iconContainer, {marginTop: 16}]}>
                    <Ionicons name={'person'} color={'#fff'} size={25}/>
                </View>

                <Text style={Styles.textLarge}>Anna Alvarado</Text>

                <Text style={[Styles.textSmall, {marginTop: 8, paddingHorizontal: 40}]}>
                    Guildhall School of Music and Drama London, UK
                </Text>

                <View style={{flexDirection: "row", marginTop: 32}}>

                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={[Styles.textSmall, {marginBottom: 4}]}>Photos</Text>
                        <Text style={Styles.textLarge}>456</Text>
                    </View>

                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={[Styles.textSmall, {marginBottom: 4}]}>Followers</Text>
                        <Text style={Styles.textLarge}>602</Text>
                    </View>

                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={[Styles.textSmall, {marginBottom: 4}]}>Follows</Text>
                        <Text style={Styles.textLarge}>290</Text>
                    </View>

                </View>

            </View>

            <View style={{flex: 2, flexDirection: "row", padding: 32}}>

                <Image style={{flex: 1, marginEnd: 16, borderRadius: 16}}
                       source={require('../../../assets/adaptive-icon.png')}/>

                <View style={{flex: 1}}>
                    <Image style={{flex: 1, marginBottom: 16, borderRadius: 16}}
                           source={require('../../../assets/adaptive-icon.png')}/>
                    <Image style={{flex: 1, borderRadius: 16}} source={require('../../../assets/adaptive-icon.png')}/>
                </View>

            </View>

        </View>
    );
};

export default Profile;
