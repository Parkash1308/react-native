import React,{useState} from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const style = StyleSheet.create ({

    text:{
        fontSize:30
    }
})

const StatePractice = () =>{

    const[name,setName]=useState("Parkash")
    
    let data="Ali"

    const updateName =()=>{

        setName("Parkash kumar")
        data="Islam"
    }

    return (
        <View>
            <Text style={style.text}>
                {name}
            </Text>
            <Text style={style.text}>
                {data}
            </Text>
            <Button title='Update Name' onPress={updateName}></Button>
        </View>
    );

}

export default StatePractice;