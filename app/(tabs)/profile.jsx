import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import { useState } from "react";
import { getUserPosts, logout } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoThumb from "../../components/VideoThumb";
import { useGlobalContext } from "../../context/globalProvider";
import { icons } from "../../constants";
import InfoBox from "../../components/InfoBox";
import { router } from "expo-router";
const Profile = () => {
  const { user, setUser, setIsLogIn } = useGlobalContext();
  const { data: posts, reFetch } = useAppwrite(() => getUserPosts(user.$id));

  const logOut = async () => {
    await logout();
    setUser(null);
    setIsLogIn(false);
    router.replace("/signIn");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoThumb video={item} />}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center  mt-6 mb-12 ">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logOut}
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-5 h-5"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border-secondary rounded-lg justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>
            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />
            <View className="mt-5 flex-row">
              <InfoBox
                title={posts.length || 0}
                subtitle="Videos"
                containerStyles="mr-10"
                titleStyles="text-lg"
              />
              <InfoBox
                title="1Mil"
                subtitle="Followers"
                titleStyles="text-lg"
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No video found"
            subtitle="Try searching something else"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
