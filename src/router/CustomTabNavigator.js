import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {tabScreens} from '../constants';

const Tab = createBottomTabNavigator();

const CustomTabNavigator = () => {
  const bottomTabIconConfig = (icon, color, size) => {
    switch (icon) {
      case 'home':
        return <MaterialCommunityIcons name="home" color={color} size={size} />;
      case 'search':
        return <Octicons name="search" color={color} size={size} />;
      case 'explore':
        return <MaterialIcons name="explore" color={color} size={size} />;
      case 'history':
        return (
          <MaterialCommunityIcons name="history" color={color} size={size} />
        );
      case 'account-circle':
        return (
          <MaterialIcons name="account-circle" color={color} size={size} />
        );
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#e91e63'}}>
      {tabScreens.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: item.name,
            tabBarIcon: ({color, size}) =>
              bottomTabIconConfig(item.icon, color, size),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default CustomTabNavigator;
