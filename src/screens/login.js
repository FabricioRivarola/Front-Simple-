import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    Platform,
    ImageBackground,
    StyleSheet,
} from "react-native";
import { primaryColor } from "../config/colors";
import { Input } from '../components/input';
import { PassInput } from '../components/passinput';
import { Boton } from '../components/botones';

import { loginCheck } from "../api/login";
import { save } from "../utility/storage";

const Login = ({ navigation }) => {
  const [dni, setDni] = useState(); 
  const [password, setPassword] = useState(); 

  const handleValidar = async () => {
      const data = await loginCheck(dni, password);

      if (data.success) {
        // Si la autenticación es exitosa, guardar el token y navegar a la siguiente pantalla
        const result = await save("token", data.token);

        navigation.navigate("tabs"); 
      } else {
        // Si las credenciales son incorrectas, mostrar un mensaje de error
        alert("Usuario o contraseña incorrectos");
      }
    
    console.log(data)
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{paddingTop: Platform.OS === "android" ? 30 : 0, backgroundColor: "skyblue", flex: 1, }}>
        <ImageBackground source={require("../../assets/fondo.png")} resizeMode="cover" style={{flex: 1, backgroundColor: "gray",}}>
          <View style={styles.logo}>
            <Image style={{width: 200, height: 200, borderRadius: 100, borderWidth: 3, borderColor: primaryColor,}} source={require("../../assets/logo.png")}/>
            <Text style={{ fontSize: 35, color: "white", textAlign: "center" }}>
              Codeando como un campeón
            </Text>
          </View>
          <View style={styles.inputs}>
            <Input label="Ingrese su DNI" value={dni} onChangeText={setDni} onChage icon="alien" type="numeric"/>
            <PassInput label="Ingrese su contraseña" value={password} type="numeric" onChangeText={setPassword}/>
            <Boton title="Ingresar" onPress={handleValidar} />
            
            <Boton title="Crear cuenta" mode="outlined" />
          </View>
          <View style={styles.olvide}>
            <Text>Próximamente...</Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  texto: {},
  logo: {
    flex: 0.5,
    alignItems: "center",
    alignContent: "center",
    padding: 10,
  },
  inputs: {
    flex: 0.4,
    padding: 10,
    justifyContent: "center",
  },
  olvide: {
    flex: 0.1,
  },
});

export default Login;
