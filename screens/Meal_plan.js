import { View, ScrollView ,StyleSheet, Text} from 'react-native'
import React, { useEffect , useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Day from '../components/Day';
import {apiKey} from '../constants/api';

const Meal_plan = () => {
    const [mealPlan, setMealPlan] = useState(null)
    const getMealPlan = () => {
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&timeFrame=week`
          )
          .then(response => response.json())
          .then((data) => {
            //console.log("\n\n\n\n\n\n\n\n\n\n\n\nmeal plan",data)
            setMealPlan(data)
          })
          .catch(() => {
            console.log("error")
          })
    } 
      useEffect(() => {
        getMealPlan();
      }, []);

    return (
        <SafeAreaView style={styles.back}>
            <ScrollView scrollEventThrottle={16}>
                <View style={styles.container}>             

                    <View style={{height:780, marginTop:10}}>
                    <Text style={styles.tittle}>Meal Plan page</Text> 
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={true}>

                            <Day day={'Monday'} data={mealPlan?.week.monday}/>
                            <Day day={'Tuesday'}  data={mealPlan?.week.tuesday}/>
                            <Day day={'Wednesday'}  data={mealPlan?.week.wednesday}/>
                            <Day day={'Thursday'}  data={mealPlan?.week.thursday}/>
                            <Day day={'Friday'}  data={mealPlan?.week.friday}/>
                            <Day day={'Saturday'}  data={mealPlan?.week.saturday}/>
                            <Day day={'Sunday'}  data={mealPlan?.week.sunday}/>
                            
                        </ScrollView>
                    </View>
                    
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
            backgroundColor:'#E5E4E4',
        },
        
        back:{
            backgroundColor: "#E5E4E4",
        },

        tittle:{
            fontWeight: 'bold',
            fontSize: 28,
            padding: 25,
            textAlign: 'center',
        },
    })


export default Meal_plan;