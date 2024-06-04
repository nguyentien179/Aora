import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="signIn" options={{ headerShown: false }} />
        <Stack.Screen name="signUp" options={{ headerShown: false }} />
      </Stack>

      {/* <StatusBar backgroundColor="#161622" styles="light" /> */}
    </>
  );
};

export default _layout;
