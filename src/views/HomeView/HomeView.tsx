import React from 'react';
import {
    FlatList,
    Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { listRecette } from '../../data/RecetteList';

import { Recette } from '../../models/Recette';

const HomeView = () => {
  return (
    <View>
        <Text>Bienvenue</Text>
        <FlatList
            data={listRecette}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => 
                <RecetteCard id={item.id} name={item.name} src={item.src}/>
            }
        />      
    </View>
  )
}



const RecetteCard = ({id,name,src}:Recette) => {
    return (
    <View>
        <Text>{name}</Text>
        <Image source={src} style={styles.imageRecette}/>
    </View>
    )
}

const styles = StyleSheet.create({
    imageRecette:{
       width:200,
       height:200

    }
})

export default HomeView