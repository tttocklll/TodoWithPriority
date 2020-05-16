import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screen/Home'
// import AddScreen from './Screen/Add'

type StackParamList = {
  Home: undefined,
  // Add: undefined
}

const Stack = createStackNavigator<StackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none" mode="modal"  >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;