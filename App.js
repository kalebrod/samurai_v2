
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';

const MainNavigator = createStackNavigator(
  {
    Login: {screen: Login},
    Register: {screen: Register},
    Home: {screen: Home}
  }
);
const App = createAppContainer(MainNavigator);

export default App;



