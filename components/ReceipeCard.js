import {useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image,Linking} from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, ReceipeTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { db, auth } from "../firebase";


const ReceipeCard = ({ data }) => {

  const navigation = useNavigation();
  const [FavColor, setFavColor] = useState(assets.heartEmpty);

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
        if(fav.includes(data.title) !== true){
          fav.push(data.title)
          db.collection('Users').doc(auth.currentUser.uid).update({favoris:fav})
          setFavColor(assets.heart)
          console.log("favoris add")
        }else{
          db.collection('Users').doc(auth.currentUser.uid).update({
            favoris:firebase.firestore.FieldValue.arrayRemove(data.title)
          })
          setFavColor(assets.heartEmpty)
          console.log("favoris remove")
        }
      })
  };

  const updateColor = () => {
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
          setFavColor(assets.heartEmpty)
        }else{
          setFavColor(assets.heart)
        }
      })
  };

  useEffect(() => {
    updateColor();
  }, []);
  console.log("favori 1 ou 2",data)
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

        <CircleButton imgUrl={FavColor} right={10} top={10} handlePress={updateFav}/>
      </View>

      <SubInfo tmpPrep={data.readyInMinutes}/>

      <View style={{ width: "100%", padding: SIZES.font }}>
        <ReceipeTitle
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
            handlePress={() => {
              if(data["analyzedInstructions"][0] !== undefined){
                navigation.navigate("Details", { data })
              }
              else{
                Linking.openURL(data.sourceUrl)
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ReceipeCard;
