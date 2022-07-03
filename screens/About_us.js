import { View, ScrollView ,StyleSheet, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import Team_left from '../components/Team_left';
import Team_right from '../components/Team_right';
import { COLORS } from '../constants';

function About_us(){
    return (
        <SafeAreaView style={styles.back}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.tittle}>About us page</Text>
                    <Team_left mates={'Mike Leveleux'} info={'A FAIRE EN ANGLAIS !!!!! Généralement les professeurs de français recommandent à leurs élèves de ne pas faire de phrases trop longues. Victor Hugo ou Marcel Proust n’ont pas vraiment respecté ce principe. Chez Proust, les phrases comptent en moyenne 43 mots contre une vingtaine en moyenne chez les écrivains de langue française.'}/>
                    <Team_right mates={'Anne-Julie Hottin'} info={'A FAIRE EN ANGLAIS !!!!!Généralement les professeurs de français recommandent à leurs élèves de ne pas faire de phrases trop longues. Victor Hugo ou Marcel Proust n’ont pas vraiment respecté ce principe. Chez Proust, les phrases comptent en moyenne 43 mots contre une vingtaine en moyenne chez les écrivains de langue française.'}/>
                    <Team_left mates={'Victoria Stasik'} info={'A FAIRE EN ANGLAIS !!!!!Généralement les professeurs de français recommandent à leurs élèves de ne pas faire de phrases trop longues. Victor Hugo ou Marcel Proust n’ont pas vraiment respecté ce principe. Chez Proust, les phrases comptent en moyenne 43 mots contre une vingtaine en moyenne chez les écrivains de langue française.'}/>
                    <Team_right mates={'Simon Martinenq'} info={"Etudiant ingénieur numérique à la Recherche d'un stage de 4 mois à partir de Novembre 2022"}/>
                    <Team_left mates={'Mael Gueguen'} info={'A FAIRE EN ANGLAIS !!!!!Généralement les professeurs de français recommandent à leurs élèves de ne pas faire de phrases trop longues. Victor Hugo ou Marcel Proust n’ont pas vraiment respecté ce principe. Chez Proust, les phrases comptent en moyenne 43 mots contre une vingtaine en moyenne chez les écrivains de langue française.'}/>
                    <Team_right mates={'Theo Masson'} info={'A FAIRE EN ANGLAIS !!!!!Généralement les professeurs de français recommandent à leurs élèves de ne pas faire de phrases trop longues. Victor Hugo ou Marcel Proust n’ont pas vraiment respecté ce principe. Chez Proust, les phrases comptent en moyenne 43 mots contre une vingtaine en moyenne chez les écrivains de langue française.'}/>
                </View>
            </ScrollView>
        </SafeAreaView>
        
        
    )
}
    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#F1F1F1',
        },
        back:{
            backgroundColor: "#F1F1F1",
            
        },
        tittle:{
            fontWeight: 'bold',
            fontSize: 28,
            padding: 5,
            textAlign: 'center',
        },
    })


export default About_us;