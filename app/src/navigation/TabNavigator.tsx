import React from 'react';
import { useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import { themes } from '../context/ThemeContext';
import { Watchlist } from '../screens/tabs/Watchlist';
import { Chart } from '../screens/tabs/Chart';
import { Dashboard } from '../screens/tabs/Dashboard';
import { Profile } from '../screens/tabs/Profile';
import { Analyze } from '../screens/tabs/Analyze';

const TabNav = createBottomTabNavigator();
const iconSize = 28;

export default function makeTabNav() {  
  const customTabBarIcon = ({ color }) => {
    let route = useRoute();
    let name = () => {
      switch(route.name) {
        case 'Dashboard':
          return String('appstore-o');
        case 'Watchlist':
          return String('profile');
        case 'Chart':
          return String('areachart');
        case 'Analyze':
          return String('calculator');
        case 'Profile':
          return String('user');
        default:
          return String('meh');
      };
    }

    return ( <AntDesign name={name()} size={iconSize} color={color} /> );
  }

  return (
    <TabNav.Navigator 
      initialRouteName='Dashboard' 
      tabBarOptions={{ 
        showLabel: false, 
        activeTintColor: themes.Dark.colors.primary, 
        style: {
          paddingTop: 18,
          shadowColor: 'rgba(0, 0, 0, 0.9)',
          shadowRadius: 12,
          shadowOpacity: 0.5,
          shadowOffset: { width: 0, height: 8 },
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderTopColor: 'transparent',
          backgroundColor: themes.Dark.colors.card
        }
      }}>
      <TabNav.Screen
        name='Watchlist'
        component={Watchlist}
        options={{
            tabBarLabel: '',
            tabBarIcon: customTabBarIcon
        }}
      />
      <TabNav.Screen
        name='Chart'
        component={Chart}
        options={{
            tabBarLabel: '',
            tabBarIcon: customTabBarIcon
        }}
      />
      <TabNav.Screen
        name='Dashboard'
        component={Dashboard}
        options={{
            tabBarLabel: '',
            tabBarIcon: customTabBarIcon
        }} 
      />
      <TabNav.Screen
        name='Analyze'
        component={Analyze}
        options={{
            tabBarLabel: '',
            tabBarIcon: customTabBarIcon
        }}
      />
      <TabNav.Screen
        name='Profile'
        component={Profile}
        options={{
            tabBarLabel: '',
            tabBarIcon: customTabBarIcon
        }}
      />
    </TabNav.Navigator>
  );
}