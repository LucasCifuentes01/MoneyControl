import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { useDate, useDay } from "./src/hooks/useDate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useDollarPrice,
  useLocalDollarPrice,
} from "./src/hooks/useDollarPrice";
import { View } from "react-native";
import Constants from "expo-constants";
import ResmueScreen from "./src/Views/resumeScreen";
import IncomeScreen from "./src/Views/incomeScreen";

export default function App() {
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    const currentDate = useDate(); // useDate devuelve la fecha actual en formato 'dd/mm/yyyy'
    const dolarPrice = async () => {
      const lastUpdate = (await useLocalDollarPrice()) ?? "0/0/0";
      if (!lastUpdate && useDay(lastUpdate) !== 0) return;
      if (useDay(currentDate) === useDay(lastUpdate)) return;
      //acá llamo al endpoint para traer el precio del dollar
      useDollarPrice();
      //actualizo lastUpdate
      AsyncStorage.setItem("lastUpdate", currentDate);
    };
    dolarPrice();
  }, []);

  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Resumen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tab.Screen
              name="Resumen"
              component={ResmueScreen}
              options={{
                tabBarLabel: "Resumen",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Incomes"
              component={IncomeScreen}
              options={{
                tabBarLabel: "Incomes",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}
