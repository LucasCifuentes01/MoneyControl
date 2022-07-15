import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useCurrency } from "../hooks/useCurrency";
import { ARS_TYPE, USD_TYPE } from "../constants/currency";

const TotalMoney = () => {
  const dolarPrice = useSelector(state => state.currencyPrice[USD_TYPE]);
  const [currencySelected, setCurrencySelected] = useState(ARS_TYPE);
  const { ARS, USD } = useSelector((state) => state.money);
  const arsFormated = useCurrency({ amount: ARS, currencyType: ARS_TYPE });
  const usdFormated = useCurrency({ amount: USD, currencyType: USD_TYPE });
  const totalARS = useCurrency({
    amount: ARS + (USD * dolarPrice),
    currencyType: currencySelected,
  });
  const totalUSD = useCurrency({
    amount: (ARS / dolarPrice) + USD,
    currencyType: currencySelected,
  })
  return (
    <View style={styles.container}>
      <View style={styles.currency}>
        <TouchableWithoutFeedback onPress={() => setCurrencySelected(ARS_TYPE)}>
          <Text style={styles.textCurrecy}>Pesos</Text>
        </TouchableWithoutFeedback>
        <Text style={styles.textCurrecy}> | </Text>
        <TouchableWithoutFeedback onPress={() => setCurrencySelected(USD_TYPE)}>
          <Text style={styles.textCurrecy}>Dolares</Text>
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.text}>
        $ {currencySelected === ARS_TYPE ? arsFormated : usdFormated}
      </Text>
      <Text style={styles.totalCurrency}>Total: $ {currencySelected === ARS_TYPE ? totalARS : totalUSD}</Text>
    </View>
  );
};

export default TotalMoney;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7e57c2",
    marginTop: 15,
    borderRadius: 3,
    paddingVertical: 10,
  },
  text: {
    color: "#fff",
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  textCurrecy: {
    fontSize: 20,
    letterSpacing: 2,
    color: "#fff",
  },
  currency: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  totalCurrency: {
    color: "#e2e2e2",
    fontSize: 15,
  },
});
