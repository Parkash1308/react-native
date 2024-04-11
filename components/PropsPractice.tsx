import React from 'react'
import { View,Text ,StyleSheet} from 'react-native'


const style = StyleSheet.create({

    container:{
        fontSize:20,
        backgroundColor:'green',
        padding:5,
        margin:7,

    }
})

const PropsPractice = (Props)=>{
    console.warn(Props.name)
    return(
       
        <View style={style.container}>
            <Text style={style.container}>
                Your name is :{Props.name}
                
            </Text>
            <Text style={style.container}>Your age is : {Props.age}</Text>
        </View>
    );
}
export default  PropsPractice;