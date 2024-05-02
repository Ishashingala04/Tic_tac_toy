import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function Metrixpage({navigation}) {
  return (
  <>
  <View style={{backgroundColor:'#35708E',height:'100%'}}>
  
         <View style={style.heading}>
                <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',padding:10,color:'#9B695A'}}>Tic Tac Toe</Text>
          </View>

        
                  <View style={{justifyContent:'center',alignItems:'center',height:350}}>
                    <Pressable onPress={()=>{navigation.navigate('Level1')}}>
                    <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',padding:10,color:'white'}}>3 X 3 Matrix</Text>
                      <Image source={require('./img/3x3.png')} style={{height:200,width:200}}></Image>
                    </Pressable>
                  </View>
 </View>
            
       
  </>
  )
}
const style = StyleSheet.create({
  heading:{
    height:50,
    width:'90%',
    backgroundColor:'#E3B283',
    margin:15,
    borderRadius:10
},
})