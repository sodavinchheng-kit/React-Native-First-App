import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './views/Home';
import AboutPage from './views/About';
import globalStyles from './style/global';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: globalStyles.header,
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="About" component={AboutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
