import { getmaterias } from "../config/urlapis";

export const obtenerMaterias = async (token) => {
    const response = await fetch(getmaterias, {method: "GET", headers: { auth: token }});

    return await response.json(); 
};