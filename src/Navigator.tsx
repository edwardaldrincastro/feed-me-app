import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { DashboardPage, LoginPage, OnboardingPage, RegistrationPage, RestaurantPage, SignUpPage } from "./pages";

const { Navigator, Screen } = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Onboarding" headerMode="none">
        <Screen name="Dashboard" component={DashboardPage} />
        <Screen name="Login" component={LoginPage} />
        <Screen name="Onboarding" component={OnboardingPage} />
        <Screen name="Registration" component={RegistrationPage} />
        <Screen name="Restaurant" component={RestaurantPage} />
        <Screen name="SignUp" component={SignUpPage} />
      </Navigator>
    </NavigationContainer>
  );
};
