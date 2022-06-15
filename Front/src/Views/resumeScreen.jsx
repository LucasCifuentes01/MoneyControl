import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import TotalMoney from "../components/TotalMoney";
import Resume from "../components/Resume";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <TotalMoney />
      <Resume />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
