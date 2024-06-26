import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./stack";
import Login from "../screens/login"

const Router = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default Router;
