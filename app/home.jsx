import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";

const home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-8" edges={["top"]}>
      <StatusBar style="dark" />
      {/* punchline and avatar  */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            className="font-bold tracking-wider text-neutral-700"
            style={{ fontSize: hp(4.5) }}
          >
            READY TO
          </Text>
          <Text
            className="font-bold tracking-wider text-rose-500"
            style={{ fontSize: hp(4.5) }}
          >
            WORKOUT
          </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
          <Image
            className="rounded-full"
            style={{ height: hp(6), width: hp(6) }}
            source={require("../assets/images/avatar.png")}
          />
          <View
            style={{ height: hp(5.5), width: hp(5.5) }}
            className="bg-neutral-200 border-[3px] border-neutral-300 rounded-full flex justify-center items-center"
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/* image slider  */}
      <View>
        <ImageSlider />
      </View>

      {/* body parts list  */}
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({});
