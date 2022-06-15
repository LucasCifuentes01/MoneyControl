import { USD_URL } from "../constants/api_data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const useDollarPrice = () => {
  fetch(USD_URL)
    .then((res) => {
      res.json().then((response) => {
        const dollarPrice = response.venta;
        AsyncStorage.setItem("dollarPrice", dollarPrice);
      });
    })
    .catch(() => {
      Alert.alert("Error al obtener el precio del dolar.");
    });
};

export const useLocalDollarPrice = async () => {
  try {
    const value = await AsyncStorage.getItem("dollarPrice");
    return value;
  } catch (e) {
    Alert.alert("Error al obtener el dato.");
  }
};
