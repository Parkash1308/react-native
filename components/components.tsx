import React from 'react'
import { View,Text,StyleSheet,Button } from 'react-native'


function Component():React.JSX.Element{
    let data=100

    const fruit=(val) =>{
        data=20
        console.warn(data)
    }

    return (
        <View>
            <Text>
             {data}
            </Text>
            <Button title='Press' color={'green'} onPress={fruit}></Button>
            <Button title='Press' color={'red'} onPress={()=>fruit("Apple")}></Button>
        </View>
    );
}
export default Component;