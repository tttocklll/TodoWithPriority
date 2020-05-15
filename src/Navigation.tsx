import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screen/Home'
import AddScreen from './Screen/Add'
import ErrorBoundary from '../ErrorBoundary'

type StackParamList = {
  Home: undefined,
  Add: undefined
}

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <ErrorBoundary>
          <Stack.Screen name="Home" component={HomeScreen} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Stack.Screen name="Add" component={AddScreen} />
        </ErrorBoundary>
      </Stack.Navigator>
    </NavigationContainer>
  );
}