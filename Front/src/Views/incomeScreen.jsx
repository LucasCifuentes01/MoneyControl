import { View, TextInput, StyleSheet } from "react-native";

const IncomeScreen = () => {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Text input" />
        <TextInput style={styles.input} placeholder="Text input" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#b6b6b6",
    paddingVertical: 5,
    marginHorizontal: 8,
    flex: 1,
  },
  container: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default IncomeScreen;
