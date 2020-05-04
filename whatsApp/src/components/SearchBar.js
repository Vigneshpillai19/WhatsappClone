import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onEnd }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.searchIcon} />
            <TextInput
                autoCapitalize="words"
                autoCorrect={false}
                placeholder=" Search" 
                placeholderTextColor="black" 
                style={styles.textInp}
                onChangeText={(newVal) => onTermChange(newVal)}
                onEndEditing={onEnd}
                // onChangeText={newVal => onTermChange(newVal)}
                // onEndEditing={() => onEnd('Vignesh')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#D3D3D3',
        height: 40,
        margin: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInp: {
        marginLeft: 0,
        marginRight: 10,
        height: 35,
        // borderColor: 'black',
        // borderWidth: 1,
        alignItems: 'stretch',
        flex:1,
        paddingLeft: 8,
        borderRadius: 10,
        fontSize: 18,
    },
    searchIcon: {
        marginLeft: 5,
        fontSize: 33,
    }
});

export default SearchBar;