import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AboutButton from '../components/AboutButton';
import ShoppingList from '../components/ShoppingList';
import AboutPage from '../views/About';
import getHeaderTitle from '../js/route';
import {Text} from 'react-native';
import globalStyles from '../style/global';

const HomePage = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AboutButton onPress={() => navigation.navigate('About')} />
      ),
      headerTitle: getHeaderTitle(route),
    });
  });

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        header: () => null,
        title: () => {
          let title = 'Home';
          switch (route.name) {
            case 'HomeTab':
              title = 'Home';
              break;
            case 'AboutTab':
              title = 'About';
              break;
            default:
              break;
          }
          return <Text style={globalStyles.text}>{title}</Text>;
        },
      })}>
      <Tab.Screen name="HomeTab" component={ShoppingList} />
      <Tab.Screen name="AboutTab" component={AboutPage} />
    </Tab.Navigator>
  );
};

export default HomePage;
