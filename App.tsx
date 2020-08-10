import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {ThemeProvider} from '@shopify/restyle';
import {Routes} from "./scr/components/Navigation"
import {Onboarding, Welcome, assets as authenticationAssets} from "./scr/Authentication";
import {LoadAssets, theme} from "./scr/components";
const assets = [... authenticationAssets]
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf")

}
const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigation = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />

    </AuthenticationStack.Navigator>
  );
};
export default function App() {
  return (
      <ThemeProvider {...{theme}}>
          <LoadAssets {...{ fonts, assets }}>
              <AuthenticationNavigation />
          </LoadAssets>
      </ThemeProvider>

  );
}
