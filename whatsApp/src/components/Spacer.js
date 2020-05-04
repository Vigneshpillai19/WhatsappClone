import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
    return (
        <View style={styles.marginspace}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    marginspace: {
        margin: 10
    }
});

export default Spacer;