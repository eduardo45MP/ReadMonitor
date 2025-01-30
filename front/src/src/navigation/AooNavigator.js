import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import AddBookScreen from '../screens/AddBookScreen';
import BookDetailsScreen from '../screens/BookDetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tela Inicial' }} />
        <Stack.Screen name="AddBook" component={AddBookScreen} options={{ title: 'Adicionar Livro' }} />
        <Stack.Screen name="BookDetails" component={BookDetailsScreen} options={{ title: 'Detalhes do Livro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
