import React from "react";
import {Pressable, Text, TextInput, View} from "react-native";
import styles from "./styles";
import Styles from "./styles";
import {Ionicons} from "@expo/vector-icons";
import Card from "../../components/Card";
import CircleImage from "../../components/CircleImage";

const Login = ({navigation}) => {

    const {
        container
    } = styles;

    return (
        <View style={container}>

            <View style={{flex: 3, alignItems: "center", justifyContent: "center"}}>

                <Pressable style={Styles.iconContainer} onPress={() => navigation.toggleDrawer()}>
                    {/*<Ionicons name={'person'} color={'#fff'} size={25}/>*/}
                    <CircleImage size={90} color={'white'} source={require('../../../assets/assignment-2-app-UI.png')}/>
                </Pressable>

            </View>

            <View style={{flex: 6}}>

                <Card style={{borderRadius: 24, paddingHorizontal: 16, paddingVertical: 12}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 12, color: "#909090"}}>Email Address</Text>
                        <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                            <Ionicons name={'mail-outline'} color={'#797979'} size={16}/>
                            <TextInput
                                style={{
                                    flex: 1,
                                    fontSize: 12,
                                    padding: 8,
                                    marginLeft: 8
                                }}
                                placeholder={"example@email.com"}
                                multiline={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                blurOnSubmit={false}
                            />
                        </View>
                    </View>
                </Card>


                <Card style={{borderRadius: 24, paddingHorizontal: 16, paddingVertical: 12}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 12, color: "#909090"}}>Password</Text>
                        <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                            <Ionicons name={'lock-closed-outline'} color={'#797979'} size={16}/>
                            <TextInput
                                style={{
                                    flex: 1,
                                    fontSize: 12,
                                    padding: 8,
                                    marginLeft: 8
                                }}
                                placeholder={"**********"}
                                multiline={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                blurOnSubmit={false}
                                passwordRules={"*"}
                                textContentType={"password"}
                            />
                            <Ionicons name={'eye-outline'} color={'#797979'} size={16}/>
                        </View>
                    </View>
                </Card>

                <Pressable style={{
                    borderRadius: 32,
                    backgroundColor: '#3D4886',
                    padding: 16,
                    marginTop: 16,
                    marginHorizontal: 14
                }} onPress={() => {
                    navigation.navigate('Overview');
                }}>
                    <Text style={{textAlign: "center", color: "white"}}>Login</Text>
                </Pressable>

                <View style={{flexDirection: "row", padding: 16}}>
                    <Text style={{flex: 1, fontSize: 12, textAlign: "left", color: '#3D4886'}}>Signup</Text>
                    <Text style={{flex: 1, fontSize: 12, textAlign: "right", color: '#3D4886'}}>Forgot Password</Text>
                </View>

            </View>

        </View>
    );
};

export default Login;
