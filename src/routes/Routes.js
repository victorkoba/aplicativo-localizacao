import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import HomeScreen from "../screens/HomeScreen";
import RouteScreen from "../screens/RouteScreen";
import EditarPerfil from "../screens/EditarPerfil";

const Stack = createStackNavigator();
export default function NativeStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Inicio"
          component={DrawerNavigation}
        />
      </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigation() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Página Inicial"
          component={HomeScreen}
        />
        <Drawer.Screen
          name="Página de Rotas"
          component={RouteScreen}
        />
        <Drawer.Screen
          name="Editar Perfil"
          component={EditarPerfil}
        />
      </Drawer.Navigator>
  );
}
