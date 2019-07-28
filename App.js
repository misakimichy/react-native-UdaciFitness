import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import AddEntry from './components/AddEntry';
import reducer from './reducers';
import History from './components/History';
import { purple, white } from './utils/colors';

const Tabs = {
  History: {
    screen: History,
    navigationOption: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tinColor }) => <Ionicons name='ios-bookmarks' size={30} color={tinColor} />
    },
  },
  AddEntry: {
    screen: AddEntry,
    navigationOption: {
      tabBarLabel: 'Add Entry',
      tabBarIcon: ({ tinColor }) => <FontAwesome name='plus-square' size={38} color={tinColor} />
    },
  },
};

const NavigationOptions = {
  tabBarOptions: {
    showIcon: true,
    activeTinColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
          width: 0,
          height: 3
      },
    shadowRadius: 6,
    shadowOpacity: 1,
    },
  },
};

const TabNav = createAppContainer(Platform.OS === 'ios'
  ? createBottomTabNavigator(Tabs, NavigationOptions)
  : createMaterialTopTabNavigator (Tabs, NavigationOptions))

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <View style={{height: 20}}/>
          <TabNav />
        </View>
      </Provider>
    );
  }
}