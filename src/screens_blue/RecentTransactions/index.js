import React from "react";
import {FlatList, Pressable, Text, View} from "react-native";
import styles from "./styles";
import {Ionicons} from "@expo/vector-icons";
import EmptyList from "../../components/EmptyList";
import TransactionItem from "../../components/TransactionItem";
import Circle from "../../components/Circle";
import CircleImage from "../../components/CircleImage";


const RecentTransactions = ({navigation}) => {

    const DATA = [
        {id: 0, icon: "mail-outline", type: "Payment", description: 'Payment from chris angel', amount: "$ 320"},
    ]

    const renderItem = ({item}) => <TransactionItem {...item} />;

    const keyExtractor = item => item.id;

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", padding: 8}}>
                <Pressable onPress={() => navigation.navigate('Overview')}>
                    <Ionicons name={'arrow-back'} color={'#000'} size={20}/>
                </Pressable>
                <View style={{flex: 1}}/>
                <Pressable onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name={'search'} color={'#000'} size={20}/>
                </Pressable>
            </View>

            <View style={{flexDirection: "row", padding: 8, justifyContent: "center"}}>
                <Text style={{
                    color: "#3D4886",
                    fontSize: 18,
                    fontWeight: '900',
                    marginEnd: 8,
                }}>Recent Transactions</Text>
                <View style={{flex: 1}}/>
                <Text style={{
                    color: "#3D4886",
                    fontSize: 12,
                    paddingTop: 4
                }}>see all</Text>
            </View>

            <View style={{flexDirection: "row", padding: 8}}>
                <Text style={{
                    color: "#3D4886",
                    fontSize: 11,
                    marginEnd: 8,
                    paddingHorizontal: 16,
                    paddingVertical: 4,
                    backgroundColor: "#fff",
                    borderRadius: 16
                }}>All</Text>
                <Text style={{
                    color: "#3D4886",
                    fontSize: 11,
                    marginEnd: 8,
                    paddingHorizontal: 16,
                    paddingVertical: 4,
                    backgroundColor: "#fff",
                    borderRadius: 16
                }}>Income</Text>
                <Text style={{
                    color: "#3D4886",
                    fontSize: 11,
                    marginEnd: 8,
                    paddingHorizontal: 16,
                    paddingVertical: 4,
                    backgroundColor: "#fff",
                    borderRadius: 16
                }}>Expense</Text>
            </View>

            <View style={{flex: 1}}>

                <View style={{flexDirection: "row", padding: 8}}>
                    <Text style={{
                        color: "#3D4886",
                        fontSize: 18,
                        fontWeight: '900',
                        marginEnd: 8,
                    }}>Today</Text>
                    <View style={{flex: 1}}/>
                </View>

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

            <View style={{flex: 1.5}}>
                <View style={{flex: 1, alignItems: "center"}}>
                    <Circle size={230} color={'#D6E7FC'}>

                        <Circle style={{position: "absolute", zIndex: 200, right: 90, bottom: 205}} size={50}
                                color={'white'}>
                            <Circle size={48} color={'#D6E7FC'}>
                                <CircleImage
                                    color={'#3D4886'}
                                    size={48}
                                    source={{uri: "https://i.imgur.com/Kugmu8z.jpeg"}}/>
                                {/*<Ionicons name={'person'} color={'#3D4886'} size={24}/>*/}
                            </Circle>
                        </Circle>

                        <Circle style={{position: "absolute", zIndex: 200, right: -18, bottom: 130}} size={50}
                                color={'white'}>
                            <Circle size={48} color={'#D6E7FC'}>
                                <CircleImage
                                    color={'#3D4886'}
                                    size={48}
                                    source={{uri: "https://i.imgur.com/FLbcmRK.jpeg"}}/>
                                {/*<Ionicons name={'person'} color={'#3D4886'} size={24}/>*/}
                            </Circle>
                        </Circle>

                        <Circle style={{position: "absolute", zIndex: 200, left: -18, bottom: 130}} size={50}
                                color={'white'}>
                            <Circle size={48} color={'#D6E7FC'}>
                                <CircleImage
                                    color={'#3D4886'}
                                    size={48}
                                    source={{uri: "https://i.imgur.com/nW5CqWC.jpeg"}}/>
                                {/*<Ionicons name={'person'} color={'#3D4886'} size={24}/>*/}
                            </Circle>
                        </Circle>

                        <Circle style={{position: "absolute", zIndex: 200, right: 8, bottom: 10}} size={50} color={'white'}>
                            <Circle size={48} color={'#D6E7FC'}>
                                <CircleImage
                                    color={'#3D4886'}
                                    size={48}
                                    source={{uri: "https://i.imgur.com/I7LZQm5.jpeg"}}/>
                                {/*<Ionicons name={'person'} color={'#3D4886'} size={24}/>*/}
                            </Circle>
                        </Circle>

                        <Circle style={{position: "absolute", zIndex: 200, left: 8, bottom: 10}} size={50} color={'white'}>
                            <Circle size={48} color={'#D6E7FC'}>
                                <CircleImage
                                    color={'#3D4886'}
                                    size={48}
                                    source={{uri: "https://i.imgur.com/qC2O1C6.jpeg"}}/>
                                {/*<Ionicons name={'person'} color={'#3D4886'} size={24}/>*/}
                            </Circle>
                        </Circle>

                        <Circle size={228} color={'#F2F8FD'}>
                            <Circle size={180} color={'white'}>
                                <Circle size={178} color={'#D6E7FC'}>
                                    <Circle size={130} color={'#F2F8FD'}>
                                        <Circle size={80} color={'#3D4886'}>
                                            <Circle size={60} color={'white'}>
                                                <Circle size={50} color={'#D6E7FC'}>
                                                    <CircleImage color={'#3D4886'} size={50}
                                                                 source={{uri: "https://i.imgur.com/1Ls3uvI.jpeg"}}/>
                                                    {/*<Ionicons name={'person'} color={'#3D4886'} size={24}/>*/}
                                                </Circle>
                                            </Circle>
                                        </Circle>
                                    </Circle>
                                </Circle>
                            </Circle>
                        </Circle>

                    </Circle>
                </View>
            </View>

            <Pressable style={{
                borderRadius: 32,
                backgroundColor: '#3D4886',
                padding: 16,
                marginTop: 16,
                marginHorizontal: 14
            }} onPress={() => navigation.navigate('Overview')}>
                <Text style={{textAlign: "center", color: "white"}}>See Details</Text>
            </Pressable>

        </View>
    );
};

export default RecentTransactions;
