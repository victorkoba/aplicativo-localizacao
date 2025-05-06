import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// Importou o Drawer porque é a navegação principal que escolhemos, mas poderia ser qualquer outra
import NativeStack from "./src/routes/Routes.js";

export default function App() {
  return (
    <NavigationContainer>
      <NativeStack />
    </NavigationContainer>
  );
}