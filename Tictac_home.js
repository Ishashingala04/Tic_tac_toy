import React from 'react'
import { ImageBackground, View , Text, Pressable} from 'react-native';

function Tictac_home({navigation}) {
  return (

        <>

            <View>

                <ImageBackground style={{height: '100%',width: '100%'}} resizeMode='stretch' source={require('./img/preview.jpg')}>

                    <View style={{alignItems:'center',justifyContent:'flex-end',height:'50%'}}>
                        <Pressable style={{backgroundColor:'transparent',width:245,height:50,marginBottom:10}} onPress={()=> {navigation.navigate('Game')}}></Pressable>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'flex-start',height:'50%'}}>
                        <Pressable style={{backgroundColor:'transparent',width:245,height:50,marginTop:35}} onPress={()=> {navigation.navigate('Game')}}></Pressable>
                    </View>
                                  
                </ImageBackground>

            </View>

        </>
    
  )
}

export default Tictac_home;