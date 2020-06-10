import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import PokeList from './components/PokeList/PokeList';
import Pokemon from './components/Pokemon/Pokemon';
import Home from './components/Home/Home';

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    PokeList: { screen: PokeList },
    Pokemon: {screen: Pokemon }
  },
  {
    initialRouteName:  'Home'
  })

  export default createAppContainer(RootStack);
