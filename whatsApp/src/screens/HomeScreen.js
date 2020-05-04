import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { requestPermissionsAsync, getContactsAsync } from 'expo-contacts';

import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
    const [contacts, setContacts] = useState([]);
    const [dispCont, setDispCont] = useState([]);
    const [srchterm, setSrchterm] = useState('');

    const getContacts = async () => {
        await requestPermissionsAsync();
        const { data } = await getContactsAsync();
        // console.log(data[10]);
        setContacts(data);
        setDispCont(data);
    }

    const filterResults = () => {
        // console.log(srchterm);
        if (srchterm){
            let temp = [];
            contacts.map(item => {
                if (item.name.includes(srchterm)){
                    temp.push(item);
                    // console.log(contacts[10].name.includes(srchterm));
                }
            });
            setDispCont(temp);
        }else {
            setDispCont(contacts);
        }
    }

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <View>
            <SearchBar 
                onTermChange={(newVal) => {
                    setSrchterm(newVal);
                }}
                onEnd = {filterResults}
            />
            <FlatList
                data = {dispCont}
                keyExtractor = {(item) => item.id}
                renderItem={({item}) => {
                    if(item.name){
                        return (
                            <TouchableOpacity>
                                <ListItem chevron title={item.name} />
                            </TouchableOpacity>
                        )
                    }
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create();

export default HomeScreen;