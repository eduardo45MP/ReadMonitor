import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
// Define RootStackParamList if it's not available in the specified path
export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
    return (
      <View style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Minha Biblioteca</Text>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ padding: 16, backgroundColor: '#E5E7EB', borderRadius: 8, marginBottom: 8 }}
              onPress={() => navigation.navigate('Category', { category: item.title })}
            >
              <Text style={{ fontSize: 18 }}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={{ marginTop: 16, padding: 16, backgroundColor: '#3B82F6', borderRadius: 8 }}
          onPress={() => navigation.navigate('AddBook')}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Adicionar Livro</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
type RootStackParamList = {
  Home: undefined;
  Category: { category: string };
  AddBook: undefined;
};

const categories = [
  { id: '1', title: 'Lidos' },
  { id: '2', title: 'Em andamento' },
  { id: '3', title: 'Quero Ler' }
];
