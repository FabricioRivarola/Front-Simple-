import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Card = ({ nombre }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{nombre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    color: "black",
  },
});

export default Card;
