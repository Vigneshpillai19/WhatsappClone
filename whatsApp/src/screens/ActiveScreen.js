import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ActiveScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                Active Members Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ActiveScreen;