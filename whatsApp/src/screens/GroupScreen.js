import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GroupScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                No Groups Created yet.
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

export default GroupScreen;