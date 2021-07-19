import React from "react";
import {FlatList, Pressable, Text, View} from "react-native";
import styles from "./styles";
import Card from "../../components/Card";
import {Ionicons} from "@expo/vector-icons";
import Styles from "../Overview/styles";
import EmptyList from "../../components/EmptyList";
import TransactionItem from "../../components/TransactionItem";


const Overview = ({navigation}) => {

    const DATA = [
        {id: 0, icon: "arrow-up", type: "Sent", description: 'Sending payment to sam', amount: "$ 120"},
        {id: 1, icon: "arrow-down", type: "Receive", description: 'Received payments from joshua', amount: "$ 440"},
        {id: 3, icon: "cash-outline", type: "Loan", description: 'Loan for your new phone', amount: "$ 710"},
    ]
    const renderItem = ({item}) => <TransactionItem {...item} />;

    const keyExtractor = item => item.id;

    return (
        <View style={styles.container}>
            <View style={{flex: 1, marginTop: 16}}>
                <Card style={{flex: 1, borderRadius: 24, padding: 8}}>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, flexDirection: "row", padding: 8}}>
                            <Pressable onPress={() => navigation.toggleDrawer()}>
                                <Ionicons name={'menu'} color={'#000'} size={20}/>
                            </Pressable>
                            <View style={{flex: 1}}/>
                            <Ionicons name={'ios-ellipsis-vertical'} color={'#000'} size={16}/>
                        </View>

                        <Pressable onPress={() => navigation.navigate('RecentTransactions')}
                                   style={[Styles.iconContainer, {alignSelf: "center", marginBottom: 12}]}>
                            <Ionicons name={'person'} color={'#fff'} size={25}/>
                        </Pressable>

                        <Text style={{
                            alignSelf: "center",
                            color: "#565B8F",
                            fontSize: 17,
                            fontWeight: '800',
                            marginBottom: 4
                        }}>Hira Raiz</Text>

                        <Text style={{
                            alignSelf: "center",
                            fontSize: 10,
                        }}>UI/UX Designer</Text>

                        <View style={{flex: 1, flexDirection: "row", padding: 8, marginTop: 8}}>
                            <View style={{flex: 1, alignItems: "center"}}>
                                <Text style={{color: "#3D4886", fontSize: 11, fontWeight: "bold"}}>
                                    $8900
                                </Text>
                                <Text style={{color: "#3D4886", fontSize: 10}}>
                                    Income
                                </Text>
                            </View>
                            <View style={{width: 1, backgroundColor: "#F0F0F0"}}/>
                            <View style={{flex: 1, alignItems: "center"}}>
                                <Text style={{color: "#3D4886", fontSize: 11, fontWeight: "bold"}}>
                                    $5500
                                </Text>
                                <Text style={{color: "#3D4886", fontSize: 10}}>
                                    Express
                                </Text>
                            </View>
                            <View style={{width: 1, backgroundColor: "#F0F0F0"}}/>
                            <View style={{flex: 1, alignItems: "center"}}>
                                <Text style={{color: "#3D4886", fontSize: 11, fontWeight: "bold"}}>
                                    $2300
                                </Text>
                                <Text style={{color: "#3D4886", fontSize: 10}}>
                                    Loans
                                </Text>
                            </View>
                        </View>

                    </View>
                </Card>
            </View>

            <View style={{flex: 1}}>

                <View style={{flexDirection: "row", padding: 8, justifyContent: "center"}}>
                    <Text style={{
                        color: "#3D4886",
                        fontSize: 18,
                        fontWeight: "600",
                        marginEnd: 8,
                    }}>Overview</Text>
                    <Ionicons style={{paddingTop: 5}} name={'notifications-outline'} color={'#3D4886'} size={16}/>
                    <View style={{flex: 1}}/>
                    <Text style={{
                        color: "#3D4886",
                        fontSize: 12,
                        paddingTop: 4
                    }}>Sep 13, 2019</Text>
                </View>

                <View style={{flex: 1}}>
                    <FlatList
                        style={{marginHorizontal: 8, flex: 1}}
                        contentContainerStyle={{flexGrow: 1}}
                        data={DATA}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={<EmptyList/>}
                        removeClippedSubviews={true}
                    />
                </View>

            </View>


            <View style={{flexDirection: "row"}}>
                <View style={{
                    flex: 1,
                    padding: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 8
                }}>
                    <Ionicons name={'home-outline'} color={'#3D4886'} size={20}/>
                </View>
                <View style={{
                    flex: 1,
                    padding: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 8
                }}>
                    <Ionicons name={'card-outline'} color={'#3D4886'} size={20}/>
                </View>
                <View style={{
                    flex: 1,
                    padding: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#3D4886",
                    borderRadius: 8,
                    margin: 8
                }}>
                    <Ionicons name={'add'} color={'#fff'} size={20}/>
                </View>
                <View style={{
                    flex: 1,
                    padding: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 8
                }}>
                    <Ionicons name={'notifications-outline'} color={'#3D4886'} size={20}/>
                </View>
                <View style={{
                    flex: 1,
                    padding: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 8
                }}>
                    <Ionicons name={'person-outline'} color={'#3D4886'} size={20}/>
                </View>
            </View>

        </View>
    );
};

export default Overview;
