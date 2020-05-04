import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BackgroundScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.box1Text}>WhatsApp</Text>
            </View>
            <View style={styles.box2}></View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // position: "absolute",
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    box1: {
        height: '40%',
        width: '100%',
        position: 'relative',
        backgroundColor: '#4a5059',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    box1Text: {
        paddingTop: '15%',
        color: 'white',
        fontSize: 25,
    },
    box2: {
        height: '60%',
        width: '100%',
        position: 'relative',
        backgroundColor: '#fafcff',
    }
});

export default BackgroundScreen;