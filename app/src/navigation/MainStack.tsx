import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import makeTabNav from './TabNavigator';
import { SignIn } from '../screens/auth/SignIn';

const MainStack = createStackNavigator();

export default function makeMainStack() {
    return (
      <MainStack.Navigator initialRouteName='SignIn'>
        <MainStack.Screen
          name='SignIn'
          component={SignIn}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name='Tabs'
          component={makeTabNav}
          options={{
            title: '',
            headerTransparent: true
          }}
        />
      </MainStack.Navigator>
    );
  };