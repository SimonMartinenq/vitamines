import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";

import { db, auth } from "../firebase";

const NFTCard = ({ data }) => {

  const navigation = useNavigation();


  const updateFav = () => {
    db
      .collection('Users')
      .doc(auth.currentUser.uid)
      .get()
      .then((querySnapshot) => {
          const dic = querySnapshot.data()
          return dic
        })
      .then((dic) => {
        const fav = dic.favoris
        fav.push(data.id)
        db.collection('Users').doc(auth.currentUser.uid).update({favoris:fav})
      })
  };
  
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={{uri : data.image}}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} handlePress={updateFav}/>
      </View>

      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.title}
          titleSize={SIZES.large}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
