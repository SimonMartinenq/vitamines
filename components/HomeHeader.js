import {React, useState, useEffect} from "react";
import { View, Text, Image, TextInput,  } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import { auth,db } from "../firebase";



const HomeHeader = ({ onSearch }) => {
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
          alignItems: "center",
        }}
      >
    
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 60, height: 60 }}
        />
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
