import {React, useState, useEffect} from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import { auth,db } from "../firebase";
import UserInfo from "../screens/UserInfo";
import Home from "../screens/Home";
import About_us from "../screens/About_us";


const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation();
  const [user,setUser] = useState(null)

  const getUser = async () => {
    db
      .collection('Users')
      .doc(auth.currentUser.uid)
      .get()
      .then((querySnapshot) => {
          const dic = querySnapshot.data()
          setUser(dic);
        });
  };

  useEffect(() => {
    getUser();
  }, []);


  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
        onPress={() => navigation.navigate(Home)}
        >
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{ width: 60, height: 60 }}
          />
        </TouchableOpacity>
        

        <TouchableOpacity onPress={() => navigation.navigate(UserInfo)}>
          <Image
            source={assets.userIcon}
            resizeMode="contain"
            style={{
              width: 50, 
              height: 50
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(About_us)}>
          <Image
            source={assets.aboutus}
            resizeMode="contain"
            style={{ width: 60, height: 60 }}
          />
        </TouchableOpacity>

      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Hello {user?.prenom} 👋
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.white,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Trouver une recette, un aliment,..."
            placeholderTextColor="gray"
            style={{ 
              flex: 1,
            }}
            
            onChangeText={onSearch}
            
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
