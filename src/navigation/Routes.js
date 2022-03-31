import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// import {useSelector} from 'react-redux';

import AuthStack from './AuthStack';

import MainStack from './MainStack';
const Stack = createNativeStackNavigator();

export default function Routes() {
//   const userData = useSelector(state => state?.auth?.userData);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}