import Onboarding , {assets as onBoardingAssets} from "./Onboarding";
import Welcome, {assets as welcomeAssets} from "./Welcome";
import {Routes} from "../components/Navigation";
import React from "react";
import Login from "./Login";
import {createStackNavigator} from "@react-navigation/stack";

export const assets = [...onBoardingAssets,...welcomeAssets]
const AuthenticationStack = createStackNavigator<Routes>();
export const AuthenticationNavigation = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
            <AuthenticationStack.Screen name="Welcome" component={Welcome} />
            <AuthenticationStack.Screen name="Login" component={Login} />
        </AuthenticationStack.Navigator>
    );
};
