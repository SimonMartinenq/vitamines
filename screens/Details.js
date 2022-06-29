
import { StatusBar, FlatList ,StyleSheet,View} from "react-native";

import { FocusedStatusBar } from "../components";

import {RecetteHeader, EtapeCard, RecetteFooter} from "../components/Recette";

const Details = ({ route }) => {

  const { data } = route.params;
  return (
    <View style={styles.container}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <FlatList
          data={data["analyzedInstructions"][0].steps}
          renderItem={({ item }) => <EtapeCard data={item}/>}
          keyExtractor={(item) => item.number}
          showsVerticalScrollIndicator={false}
          listKey="etapes"
          ListHeaderComponent={<RecetteHeader data={data} />}
          ListFooterComponent={<RecetteFooter data={data} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    margin:30,
  },
  scrollView: {
    backgroundColor: 'transparent',
  },
  text: {
    justifyContent:"space-between",
    fontSize: 15,
  },
  image:{
    width: "100%",
    height: 250,
  }
});


export default Details;
