import React from 'react';
import { Button, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import GroupScreen from '../screens/GroupScreen';
import CallScreen from '../screens/CallScreen';
import ActiveScreen from '../screens/ActiveScreen';
import ResolveScreen from '../screens/ResolveScreen';

const Tab = createMaterialTopTabNavigator({
    Chats: HomeScreen,
    Groups: GroupScreen,
    Calls: CallScreen,
    Active: ActiveScreen,
},
{
    tabBarOptions: {
        activeTintColor: 'white',  
        showIcon: false,  
        showLabel:true,
        upperCaseLabel: false,  
        style: {
            backgroundColor:'green',
            height: '15%',
            justifyContent: 'flex-end',
        },
        headertitleStyle: {
            backgroundColor: 'transparent',
        },
        headerLeft: () => <Button title="Plus" />
    }
}
);

const Navbar = () => {
    return (
        <>
            <View style={styles.container}>

            </View>
            <Tab />
        </>
    )
}

Navbar.navigationOptions = {
    headerRight: (
        <TouchableOpacity>
            <Text>Plus</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '5%',
        backgroundColor: 'blue'
    }
});

// Tab.navigationOptions = {
//     headerRight: () => (
//         <Button title="Plus" />
//     )
// }

export default Tab;