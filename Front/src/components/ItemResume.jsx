import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ItemResume = ({ item }) => {
  const { title, price, date } = item;
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <MaterialCommunityIcons
          name={item.icon}
          size={40}
          color="white"
          style={styles.icon}
        />
      </View>
      <View style={styles.description}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text> - {date}</Text>
        </View>
        <View>
          <Text style={styles.price}>$ {price}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemResume;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignContent: "space-between",
  },
  image: {
    backgroundColor: "#7e57c2",
    borderRadius: 3,
    alignContent: "center",
    justifyContent: "center",
    padding: 5,
  },
  description: {
    marginLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  titleContainer: {
    flexDirection: "row",
  },
  price: {
    fontSize: 18,
    marginTop: 5,
  },
});
