import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CustomTabNavigator from './CustomTabNavigator';

export default function Router() {
  return (
    <NavigationContainer>
      <CustomTabNavigator />
    </NavigationContainer>
  );
}
