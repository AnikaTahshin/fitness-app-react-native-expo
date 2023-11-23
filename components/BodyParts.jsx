import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const BodyParts = () => {
  const BodyPartCard = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          style={{ width: wp(44), height: wp(52) }}
          className="flex justify-end p-4 mb-4"
        >
          <Text>hel</Text>
          <Image
            source={item.image}
            resizeMode="cover"
            className="rounded-[35px] absolute"
            style={{ width: wp(44), height: wp(52) }}
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.9)"]}
            style={{ width: wp(44), height: hp(15) }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0 rounded-b-[35px]"
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View className="mx-4">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-700"
      >
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <BodyPartCard index={index} item={item} />
        )}
      />
    </View>
  );
};

export default BodyParts;

const styles = StyleSheet.create({});
