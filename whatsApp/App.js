import React from 'react';
import RegisterScreen from './src/screens/RegisterScreen';
import BackgroundScreen from './src/screens/BackgroundScreen';
import resolveScreen from './src/screens/ResolveScreen';
import HomeScreen from './src/screens/HomeScreen';
import PasswordScreen from './src/screens/PasswordScreen';

import TopNav from './src/components/TopNav';

import { createAppContainer, createSwitchNavigator, NavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  registerFlow: createStackNavigator({
    register: RegisterScreen,
    Password: PasswordScreen}),
  resolveScreen: resolveScreen,
  mainFlow: TopNav,
},{
  initialRouteName: 'registerFlow'
});

const App = createAppContainer(switchNavigator);

console.disableYellowBox = true;

export default () => {
  return (
    // <App ref={(navigator) => setNavigator(navigator)} />
    <App />
  )
}

