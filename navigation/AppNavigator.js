import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ContactListScreen from '../components/ContactListScreen';
import ContactDetailScreen from '../components/ContactDetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen name="ContactList" component={ContactListScreen} options={{ title: 'Contacts' }} />
        <Stack.Screen name="ContactDetail" component={ContactDetailScreen} options={{ title: 'Contact Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
