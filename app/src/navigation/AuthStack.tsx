import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import makeMainStack from './MainStack';
import { SignUp } from '../screens/auth/SignUp';

const AuthStack = createStackNavigator();

export default function makeAuthStack() {
    return (
      <AuthStack.Navigator mode='modal' headerMode='none'>
        <AuthStack.Screen 
          name='Main' 
          component={makeMainStack} 
        />
        <AuthStack.Screen
          name='SignUp'
          component={SignUp}
          options={{ cardStyle: { 
            backgroundColor: 'transparent' 
            } 
          }}
        />
      </AuthStack.Navigator>
    );
  };