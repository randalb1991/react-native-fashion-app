import * as React from "react";
import {ThemeProvider} from '@shopify/restyle';
import {assets as authenticationAssets, AuthenticationNavigation} from "./scr/Authentication";
import {LoadAssets} from "./scr/components";
import {theme} from "./scr/components/Theme"
import {SafeAreaProvider} from "react-native-safe-area-context";

const assets = [... authenticationAssets]
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf")

}

export default function App() {
  return (
      <ThemeProvider {...{theme}}>
          <LoadAssets {...{ fonts, assets }}>
              <SafeAreaProvider>
                  <AuthenticationNavigation />
              </SafeAreaProvider>
          </LoadAssets>
      </ThemeProvider>

  );
}
