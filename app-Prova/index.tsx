import { Text, View, StyleSheet, Alert, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Calculadora() {
  const [nome, setNome] = useState<string>("");
  const [nota1, setNota1] = useState<string>("");
  const [nota2, setNota2] = useState<string>("");
  const [nota3, setNota3] = useState<string>("");
  const [faltas, setFaltas] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  const calcularNota = () => {
    const num1 = parseFloat(nota1);
    const num2 = parseFloat(nota2);
    const num3 = parseFloat(nota3);
    const numFaltas = parseFloat(faltas);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      Alert.alert("ERRO!", "Por favor, insira todas as notas do aluno.");
      return;
    }

    if (isNaN(numFaltas)) {
      Alert.alert("ERRO!", "Por favor, insira a porcentagem de faltas.");
      return;
    }

    const media = (num1 + num2 + num3) / 3;
    let classificacao = "";

    if (media >= 7 && numFaltas < 75) {
      classificacao = "Aprovado!";
    } else if (media < 7 && numFaltas < 75) {
      classificacao = "Reprovado por Nota";
    } else if (numFaltas >= 75) {
      classificacao = "Reprovado por Falta";
    }

    const resultado = `Aluno: ${nome}\nMédia: ${media.toFixed(2)}\nStatus: ${classificacao}`;
    setMensagem(resultado);
    Alert.alert("Resultado", resultado);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Média</Text>
      <Text style={styles.title2}>Insira as informações do aluno</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Nota 1"
        keyboardType="numeric"
        value={nota1}
        onChangeText={setNota1}
      />
      <TextInput
        style={styles.input}
        placeholder="Nota 2"
        keyboardType="numeric"
        value={nota2}
        onChangeText={setNota2}
      />
      <TextInput
        style={styles.input}
        placeholder="Nota 3"
        keyboardType="numeric"
        value={nota3}
        onChangeText={setNota3}
      />
      <TextInput
        style={styles.input}
        placeholder="Porcentagem de faltas (0 a 100)"
        keyboardType="numeric"
        value={faltas}
        onChangeText={setFaltas}
      />
      <Button title="Calcular Média" onPress={calcularNota} color="#002B4D" />
      {mensagem ? <Text style={styles.result}>{mensagem}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#30263f",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#cccade",
    marginBottom: 20,
  },
  title2: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#cccade",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#004A78",
    borderRadius: 20,
    backgroundColor: "#ffffff",
  },
  result: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#f6a62c",
  },
});
