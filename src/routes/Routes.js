import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

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
        <Stack.Screen
          name="Página de Rotas"
          component={RouteScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigation() {
  return (
      <Drawer.Navigator
      screenOptions={{drawerActiveTintColor: '#838e39',
        drawerInactiveTintColor: '#000000',
      }}
      >
        <Drawer.Screen
          name="Página Inicial"
          component={HomeScreen}
          options={{
            drawerIcon: ({ size }) => (
              <Ionicons name="home-outline" size={size} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Editar Perfil"
          component={EditarPerfil}
          options={{
            drawerIcon: ({}) => (
              <AntDesign name="user" size={24} color="black" />
              ),
          }}
        />
      </Drawer.Navigator>
  );
}
