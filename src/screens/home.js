import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { getValueFor } from "../utility/storage";
import { obtenerMaterias } from "../api/getMaterias";
import { Card } from "../components/cards";


export default Home = () => {
  const [token, setToken] = useState();
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    const getToken = async () => {
      const tk = await getValueFor("token");
      setToken(tk);
    };

    const getMaterias = async () => {
      const data = await obtenerMaterias(token);
      setMaterias(data);
    };

    getToken();
    getMaterias();
  }, [token]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Materias</Text>
      <FlatList
        data={materias}
        renderItem={({ item }) => <Card nombre={item.nombre} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  flatListContent: {
    alignItems: "center",
  },
});