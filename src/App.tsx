import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { RootNavigator } from "./Navigator";
import { store } from "./store";
import { flexChild } from "./styles";

export const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        {Platform.select({
          android: (
            <KeyboardAvoidingView behavior="height" style={flexChild}>
              <RootNavigator />
            </KeyboardAvoidingView>
          ),
          ios: (
            <KeyboardAvoidingView behavior="padding" style={flexChild}>
              <RootNavigator />
            </KeyboardAvoidingView>
          ),
        })}
      </Provider>
    </SafeAreaProvider>
  );
};
