import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Bem-vindo ao ReadMonitor!</Text>
      <Button title="Adicionar Livro" onPress={() => alert("Função ainda não implementada")} />
    </View>
  );
}