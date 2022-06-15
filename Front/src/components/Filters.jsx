import { StyleSheet, View, Text } from "react-native";

const Filters = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu resumen</Text>
      <Text style={styles.title}>Mensual</Text>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
  },
});
