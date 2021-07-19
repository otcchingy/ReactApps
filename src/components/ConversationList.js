import React from 'react';
import {FlatList, View} from 'react-native';

import ChatItem from './ChatItem';
import EmptyList from './EmptyList';

const ConversationList = () => {

    const DATA = [
        {id: 0, imageUrl: "", username: "Bernard Azumah", lastMessage: 'Yo. bro whats good?. where you been at?'},
        {id: 1, imageUrl: "", username: "Chris Baah", lastMessage: 'Yo. bro whats good?. where you been at?'},
        {id: 2, imageUrl: "", username: "Samuel Hagan", lastMessage: 'Yo. bro whats good?. where you been at?'},
        {id: 3, imageUrl: "", username: "Juicy World", lastMessage: 'Yo. bro whats good?. where you been at?'},
        {id: 4, imageUrl: "", username: "Mandem Hero", lastMessage: 'Yo. bro whats good?. where you been at?'},
    ];

    const renderItem = ({item}) => <ChatItem {...item} />;

    const keyExtractor = item => item.id;

    return (
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
    );
};

export default ConversationList;
