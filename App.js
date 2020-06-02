
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Constru from './screens/Constru';

const MainNavigator = createStackNavigator(
  {
    Login: {screen: Login,navigationOptions:  {headerShown: false,}},
    Register: {screen: Register,navigationOptions:  {headerShown: false,}},
    Home: {screen: Home,navigationOptions:  {headerShown: false,}},
    Constru: {screen: Constru},
  },
    
);
const App = createAppContainer(MainNavigator);

export default App;



