import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { themes } from './src/context/ThemeContext';
import { Login } from './src/screens/Login';
import { SignUp } from './src/screens/SignUp';

const AuthStack = createStackNavigator();

export default () => (
  <NavigationContainer theme={themes.Dark}>
    <AuthStack.Navigator>
      <AuthStack.Screen 
        name='Login' 
        component={Login} 
        options= {{ headerShown: false }}
      />
      <AuthStack.Screen 
        name='SignUp' 
        component={SignUp}
        options={{ headerTransparent: true, headerBackTitleVisible: false }} 
      />
    </AuthStack.Navigator>
  </NavigationContainer>
);
