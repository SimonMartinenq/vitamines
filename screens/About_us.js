import { View, ScrollView ,StyleSheet, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import Team_left from '../components/Team_left';
import Team_right from '../components/Team_right';
import { assets } from "../constants";

function About_us(){
    return (
        <SafeAreaView style={styles.back}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.tittle}>About us page</Text>
                    <Team_left mates={'Mike Leveleux'} info={"I've always been a foodie so food is important to me. Even though I don't know how to cook, working on this project has been very interesting for me. I was able to work on the front-end of some pages."} img={assets.Mike}/>
                    <Team_right mates={'Anne-Julie Hottin'} info={"For several years I have not eaten red meat, and when I see the impact it can have on our planet, I tell myself that I made the right choice! Our Vitamin application will allow me to adapt my recipes to have all the necessary nutrients to fill the lack of meat. This mastercamp project allowed me to discover the development of a mobile application with daily project monitoring! My goal now is to eat healthy with Vitamins!"} img={assets.AnneJu}/>
                    <Team_left mates={'Victoria Stasik'} info={"Hello! I’m Vivi! If there’s a fit-girl here, it’s me! I like to take care every day of my six pack and for that, nothing better than adapted recipes! Since we created the Vitamins app, I am satisfied and my abs are too! 🙂 So ready to join us in the Vitamins adventure and ready to give your body what it needs most?? Let’s gooo"} img={assets.Vivi}/>
                    <Team_right mates={'Simon Martinenq'} info={"Digital engineer student looking for a 4-month internship from November 2022"} img={assets.Simon}/>
                    <Team_left mates={'Mael Gueguen'} info={"I’ve aways been a fan of cuisine, as much cooking than eating. But it’s not always easy to get healthy and original recipes. That’s why we thought we had to make the perfect app to make life easier."} img={assets.Mael}/>
                    <Team_right mates={'Theo Masson'} info={"I am a student in engineering school, I am a sports enthusiast. And sport is about healthy eating. That is why I felt very concerned about this project. Long live Vitamins!"} img={assets.Theo}/>
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
            marginBottom: '15%',
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