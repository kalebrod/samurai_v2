
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Constru from './screens/Constru';
import Aula from './screens/Aula'
import Aula2 from './screens/Aula2'
import Aula3 from './screens/Aula3'

const MainNavigator = createStackNavigator(
  {
    Login: {screen: Login, navigationOptions: {headerShown: false,}},
    Register: {screen: Register,navigationOptions: {headerShown: false,}},
    Home: {screen: Home, navigationOptions: {headerShown: false,}},
    Constru: {screen: Constru},
    Aula: {screen: Aula, navigationOptions: {headerShown: false,}},
    Aula2: {screen: Aula2, navigationOptions: {headerShown: false,}},
    Aula3: {screen: Aula3, navigationOptions: {headerShown: false,}},
  },
    
);
const App = createAppContainer(MainNavigator);

export default App;



