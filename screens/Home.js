import React, { useState } from "react";
import { View, SafeAreaView, FlatList , Button,Text,Image} from "react-native";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";
import { db } from "../firebase";



const Home = () => {
  const [nftData, setNftData] = useState(NFTData);
  const [userDoc, setUserDoc] = useState(null)
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

  /* const Create = () => {
    // Add a new document in collection "cities"
    var citiesRef = db.collection("cities");

    citiesRef.doc("SF").set({
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] });
    citiesRef.doc("LA").set({
        name: "Los Angeles", state: "CA", country: "USA",
        capital: false, population: 3900000,
        regions: ["west_coast", "socal"] });
    citiesRef.doc("DC").set({
        name: "Washington, D.C.", state: null, country: "USA",
        capital: true, population: 680000,
        regions: ["east_coast"] });
    citiesRef.doc("TOK").set({
        name: "Tokyo", state: null, country: "Japan",
        capital: true, population: 9000000,
        regions: ["kanto", "honshu"] });
    citiesRef.doc("BJ").set({
        name: "Beijing", state: null, country: "China",
        capital: true, population: 21500000,
        regions: ["jingjinji", "hebei"] })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  } */

  const Create = () => {
    // Add a new document in collection "cities"
    var citiesRef = db.collection("images");

    citiesRef.doc("SF").set({
        name: "San Francisco",
        ref: "/assets/adaptive-icon.png"})
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  }

  const Read = () => {
    var docRef = db.collection("cities").doc("LA");

    docRef.get().then((doc) => {
      if (doc.exists) {
        setUserDoc(doc.data());
        console.log("Document data:", doc.data());
      } else {
          console.log("No such document!");
      }
      })
      .then(() => {
        console.log("Document successfully read!");
      })
      .catch((error) => {
          console.log("Error getting document:", error);
      });
  }




  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
      <View>
          <Button title='Create' onPress={Create}></Button>
          <Button title='Read' onPress={Read}></Button>
          {
            userDoc != null &&
              <Text>nom : {userDoc.name}</Text>
          }

        </View>
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
        
      </View>
    </SafeAreaView>
  );
};

export default Home;
