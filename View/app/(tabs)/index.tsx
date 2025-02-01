import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import AddBookScreen from './Screens/AddBookScreen'; // Importa a tela de adicionar livro

export default function Home() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddBook" component={AddBookScreen} />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();