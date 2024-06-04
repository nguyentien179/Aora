import { View, Text, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import CustomButtom from "./CustomButton";
import { images } from "../constants";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-2xl text-center mt-2 font-psemibold text-white ">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>

      <CustomButtom
        title="Create Video"
        handlePress={() => router.push("/create")}
      />
    </View>
  );
};

export default EmptyState;
