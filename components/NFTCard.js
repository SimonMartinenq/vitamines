import {useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { db, auth } from "../firebase";
import Favoris from "../screens/Favoris";

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
        if(fav.includes(data.id) !== true){
          fav.push(data.id)
          db.collection('Users').doc(auth.currentUser.uid).update({favoris:fav})
          console.log("favoris add")
        }else{
          db.collection('Users').doc(auth.currentUser.uid).update({
            favoris:firebase.firestore.FieldValue.arrayRemove(data.id)
          })
          console.log("favoris remove")
        }
      }).then(() => navigation.navigate(Favoris))
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
