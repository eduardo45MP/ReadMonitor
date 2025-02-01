import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';

export default function AddBookScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [type, setType] = useState<string[]>([]);
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState<string[]>([]);
  const [cdd, setCdd] = useState('');
  const [cdu, setCdu] = useState('');
  const [isbn, setIsbn] = useState('');

  const formatPrice = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, '');
    const cents = parseInt(onlyNumbers || '0', 10);
    const formatted = (cents / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
    return formatted;
  };

  const handlePriceChange = (text: string) => {
    setPrice(formatPrice(text));
  };

  const handleAddBook = () => {
    const newBook = {
      title,
      author,
      pages,
      type: type.join(", "),
      price,
      status: status.join(", "),
      cdd,
      cdu,
      isbn,
    };

    console.log('Livro adicionado:', newBook);
    navigation.goBack();
  };

  const toggleSelection = (item: string, list: string[], setList: Function) => {
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Adicionar Livro</Text>

      <TextInput style={styles.input} placeholder="Título" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Autor" value={author} onChangeText={setAuthor} />
      <TextInput style={styles.input} placeholder="Número de Páginas" value={pages} onChangeText={setPages} keyboardType="numeric" />

      <Text style={styles.label}>Preço</Text>
      <TextInput
        style={styles.input}
        placeholder="R$0,00"
        value={price}
        onChangeText={handlePriceChange}
        keyboardType="numeric"
      />

      <TextInput style={styles.input} placeholder="CDD" value={cdd} onChangeText={setCdd} />
      <TextInput style={styles.input} placeholder="CDU" value={cdu} onChangeText={setCdu} />
      <TextInput style={styles.input} placeholder="ISBN" value={isbn} onChangeText={setIsbn} />

      <Text style={styles.checkboxLabel}>Tipo</Text>
      <View style={styles.checkboxContainer}>
        {["E-book", "Físico"].map((item) => (
          <TouchableOpacity key={item} onPress={() => toggleSelection(item, type, setType)} style={styles.checkboxWrapper}>
            <View style={styles.checkbox}>{type.includes(item) && <View style={styles.checkedBox} />}</View>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.checkboxLabel}>Situação em Acervo</Text>
      <View style={styles.checkboxContainer}>
        {["Presente", "Ausente"].map((item) => (
          <TouchableOpacity key={item} onPress={() => toggleSelection(item, status, setStatus)} style={styles.checkboxWrapper}>
            <View style={styles.checkbox}>{status.includes(item) && <View style={styles.checkedBox} />}</View>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddBook}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    marginRight: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedBox: {
    width: 14,
    height: 14,
    backgroundColor: '#3B82F6',
    borderRadius: 3,
  },
  checkboxLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
