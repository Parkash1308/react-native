import React, { useState } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import UseStatePratice  from './components/UseStatePratice'
import Component from './components/components';
import StatePractice from './components/StatePractice'
import PropsPractice from './components/PropsPractice';


const style = StyleSheet.create ({

    container: {
        fontSize:30,
        backgroundColor:'red',
        padding:5,
        margin:5,
    },
    btn:{
        fontSize:30,
        backgroundColor:'green',
        padding:5,
        alignItems:'center',
        borderRadius:10,
        width:20,
        height:20

    }

})

function App(): React.JSX.Element{
    const  [name,setName]=useState("xyz")
    const  [age, setAge]=useState(0)



    const handleUserData=(name:string,age:number)=>{
        setName(name)
        setAge(age)
    }
    return (
        <View>  
            <Text style={style.container}>
                React Native App
            </Text>

            {/* <UseStatePratice/> */}
            {/* <Component/> */}
            {/* <StatePractice/> */}
            <Button title='Update' onPress={()=>handleUserData("Parkash",23)}></Button>
            <PropsPractice name={name} age={age}/>

        </View>
    );
}

export default App;