import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { crearMateria } from "../api/crearmateria.js"; // Importa la función para crear la materia desde la API

const CrearMateria = () => {
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");

  const handleCrearMateria = async () => {
    try {
      // Validación básica (puedes agregar más validaciones según tus necesidades)
      if (!nombre || !codigo) {
        Alert.alert("Campos requeridos", "Por favor completa todos los campos.");
        return;
      }

      // Llama a la función de API para crear la materia
      const nuevaMateria = { nombre, codigo };
      const respuesta = await crearMateria(nuevaMateria);

      // Maneja la respuesta de la API según sea necesario (por ejemplo, mostrar un mensaje de éxito)
      Alert.alert("Éxito", "Nueva materia creada correctamente.");

      // Reinicia los campos después de la creación exitosa
      setNombre("");
      setCodigo("");
    } catch (error) {
      console.error("Error al crear la materia:", error);
      Alert.alert("Error", "Hubo un problema al intentar crear la materia. Por favor intenta nuevamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Materia</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de la materia"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Código de la materia"
        value={codigo}
        onChangeText={(text) => setCodigo(text)}
      />
      <Button title="Guardar Materia" onPress={handleCrearMateria} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default CrearMateria;
