import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';

import MainStack from './MainStack';
const Stack = createNativeStackNavigator();



export default function Routes() {
  const ContinueLogin = useSelector(state => state.ContinueLogin);

  console.log(ContinueLogin)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {ContinueLogin ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}