import React,{useState} from 'react'
import {Text,View,StyleSheet,Button} from 'react-native'

const style =StyleSheet.create({

  text:{
   fontSize:30, 
   color: 'red'
  },
  greenText:{
    color:'green'
  }
});


function UseStatePratice(): React.JSX.Element{
  const[liked,setLike]=useState(false)
  const[share, setShare]=useState(false)
  const[comment, setComment]=useState(false)



  const handleLike=()=>{
    setLike(!liked)
  }

  const handleShare =()=>{
        setShare(true)

  }

  const handleComment =()=> {
    setComment(true)
  }
  return(
    <View>  
      <Text style={{fontSize:34}}>
          Hello Welcome

      </Text>
      <Text style={[style.text,liked &&style.greenText]}>
        {
          liked?'Your post liked':'Like my post'
        }
      </Text>
      <Button title='Press Like' onPress={handleLike}></Button>

      <Text style={[style.text , share&& style.greenText]}>
        {
            share?'Shared your post':'share my post'
        }
      </Text>
      <Button title='share' onPress={handleShare}></Button>

      <Text style={[style.text, comment && style.greenText]}>
        {
            comment?'commented your pos':'comment my post'
        }
      </Text>
      <Button title='comment' onPress={handleComment}></Button>
    </View>
  );
}

export default UseStatePratice;

