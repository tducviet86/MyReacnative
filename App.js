import "react-native-gesture-handler";
import { useEffect, useState } from "react";

import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider, useDispatch, useSelector } from "react-redux";
import * as SplashScreen from "expo-splash-screen";

import ProductList from "./src/screens/product-list/product-list.component.js";
import ProductAdd from "./src/screens/add-product/add-product.component.js";
import ProductUpdate from "./src/screens/update-product/update-product.component.js";
import Cart from "./src/screens/cart/cart.component.js";
import TabBar from "./src/components/tab-bar/tab-bar.component.js";
// import AppProvider from "./AppContext.js";
import store from "./src/redux/store.js";
import { getTokenThunk } from "./src/redux/auth/auth.thunk.js";
import Login from "./src/screens/login/login.component.js";
import { injectStore } from "./src/helpers/api.js";
// import AsyncStorage from "@react-native-async-storage/async-storage";

injectStore(store);

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();
const App = () => (
  // <AppProvider>
  <Provider store={store}>
    <Controller />
  </Provider>
  // </AppProvider>
);

const Controller = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [appIsReady, setAppIsReady] = useState(false);

  const setup = async () => {
    await dispatch(getTokenThunk());
    setAppIsReady(true);
  };

  useEffect(() => {
    setup();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  let rendering = null;
  if (token) {
    // render cac man hinh sau khi dau nhap
    rendering = <ProtectedStack />;
  } else {
    //render dang nhap
    rendering = <AuthStack />;
  }
  return <NavigationContainer>{rendering}</NavigationContainer>;
};

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="login" component={Login} />
  </Stack.Navigator>
);

const ProtectedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="main" component={Main} />
    <Stack.Screen name="product-add" component={ProductAdd} />
    <Stack.Screen name="product-update" component={ProductUpdate} />
  </Stack.Navigator>
);
const Main = () => (
  <BottomTab.Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <TabBar {...props} />}
  >
    <BottomTab.Screen
      name="product-list"
      component={ProductList}
      options={{ tabBarLabel: "Trang chủ", icon: "home-outline" }}
    />
    <BottomTab.Screen
      name="cart"
      component={Cart}
      options={{ tabBarLabel: "Gio Hang", icon: "cart-outline" }}
    />
  </BottomTab.Navigator>
);

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
