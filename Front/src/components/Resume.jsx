import Filters from "./Filters";
import ItemResume from "./ItemResume";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { categories, categoriesNames } from "../constants/categories";

const DATA = [
  {
    ...categories[categoriesNames.SUPERMERCADO],
    price: "18000",
    date: "16/5/2022",
    id: 1,
  },
  {
    ...categories[categoriesNames.ROPA],
    price: "5000",
    date: "12/5/2022",
    id: 2,
  },
  {
    ...categories[categoriesNames.ROPA],
    price: "5000",
    date: "12/5/2022",
    id: 3,
  },
  {
    ...categories[categoriesNames.ROPA],
    price: "5000",
    date: "12/5/2022",
    id: 4,
  },
  {
    ...categories[categoriesNames.ROPA],
    price: "5000",
    date: "12/5/2022",
    id: 5,
  },
  {
    ...categories[categoriesNames.ROPA],
    price: "5000",
    date: "12/5/2022",
    id: 6,
  },
  {
    ...categories[categoriesNames.ROPA],
    price: "5000",
    date: "12/5/2022",
    id: 7,
  },
];

const Resume = () => {
  return (
    <View style={{ flex: 1 }}>
      <Filters />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={ItemResume}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={
            Platform.OS !== "android" &&
            (({ highlighted }) => (
              <View
                style={[styles.separator, highlighted && { marginLeft: 0 }]}
              />
            ))
          }
        />
      </SafeAreaView>
    </View>
  );
};

export default Resume;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
    marginVertical: 15,
  },
});
