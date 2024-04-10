/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{useState}from 'react';
import {  Text,  View, StyleSheet,Button  } from 'react-native';

// There are multiple ways to style  text in react native:
// Inline styles - applied directly to the component
// javaScript object, like following
//StyleSheet.flatten in which we can merge the styles
//external js file containin the stylesheet and imported where usable

// const style=StyleSheet.create({
//   text:{
//     fontSize:30
//   },
//   like:{
//     fontSize:30
//   },
//   comment:{
//     fontSize:30
//   },
//   share:{
//     fontSize:30
//   }

// });

  function App() :React.JSX.Element{
    const[liked,setLiked]=useState(false)
    const[shared, setShare]= useState(false);
    const[comment,setComment]=useState(false)


    const likeMypost=()=>{
      setLiked(true);
    }

    const handleComment=()=>{
      setComment(true);
      // to perform the toggle then setComment((pre)=>!pre)
    }

    const handleShare =()=>{
      setShare(true);
    }


    return (
      <View>
        <Text style={{fontSize:30}}>Hello Parkash</Text>

        <Text style={{fontSize:30}}>
          
          {
            liked ? 'You Liked The Post' : 'Like This Post'
          }
        </Text>

        <Button title='Like' onPress={likeMypost}></Button>

        <Text style={{fontSize:30}}>

          {
            shared? "your post shared":"share my post"
          }
        </Text>

        <Button title='Share' onPress={handleShare}></Button>

        <Text style={{fontSize:30}}>
          {
            comment? "your post commented": "comment my post"
          }
        </Text>

        <Button title='comment' onPress={handleComment}></Button>
        
      </View>
    )};

  export default App;

