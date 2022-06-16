import React, { useState } from "react";
import { View, SafeAreaView, FlatList ,Text, Button} from "react-native";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";
import { db } from "../firebase";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  const Create = () => {
    const maRecette = firebase.doc(db,"Mycollection","MyDocument")
    const docData = {
      "titre":"nouvelle recette"
    }
    firebase.setDoc(maRecette,docData)
    .then(()=>{
      alert("nouveaux recette creer")
    })
    .catch((error)=>{
      alert(error.message)
    })
  }




  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
        <View>
          <Button title='Create' onPress={Create}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
