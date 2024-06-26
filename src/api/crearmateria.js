// apis/crearmateria.js

import { addMateria } from "../config/urlapis";

export const crearMateria = async (nuevaMateria) => {
    try {
      // Aquí realizarías la lógica para enviar los datos al backend (por ejemplo, usando fetch o axios)
      // Ejemplo básico:
      const response = await fetch(addMateria, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Agrega cualquier header necesario (por ejemplo, token de autorización)
        },
        body: JSON.stringify(nuevaMateria),
      });
  
      const data = await response.json();
      return data; // Puedes retornar datos adicionales si es necesario
    } catch (error) {
      console.error("Error en la creación de materia:", error);
      throw error;
    }
  };
  