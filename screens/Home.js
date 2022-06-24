import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Button,Text,Image} from "react-native";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Footer from '../components/Footer'

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData, assets } from "../constants";




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
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>

        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<Footer/>}
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
          <View style={{ flex: 1, backgroundColor: COLORS.primary }} />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Home;
