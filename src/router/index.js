import React from 'react';
import {StyleSheet} from 'react-native';
import Home from '../screen/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectedItem from '../screen/SelectedItem';
import Explore from '../screen/Explore';
import History from '../screen/History';
import Profile from '../screen/Profile';
import Search from '../screen/Search';
import Wardrobe from '../screen/Wardrobe';

export default function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SelectedItem" component={SelectedItem} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Wardrobe" component={Wardrobe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
