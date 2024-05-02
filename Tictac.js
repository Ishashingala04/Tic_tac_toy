import React, { useState ,useEffect} from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Tictac(){

    const[temp,settemp]=useState(0);
    const[getdata1,setgetdata1]= useState('');
    const[getdata2,setgetdata2]= useState('');
    const[getdata3,setgetdata3]= useState('');
    const[getdata4,setgetdata4]= useState('');
    const[getdata5,setgetdata5]= useState('');
    const[getdata6,setgetdata6]= useState('');
    const[getdata7,setgetdata7]= useState('');
    const[getdata8,setgetdata8]= useState('');
    const[getdata9,setgetdata9]= useState('');
    // const[winning,setWinning]= useState('');

    const[get1,setget1]= useState(false);
    const[get2,setget2]= useState(false);
    const[get3,setget3]= useState(false);
    const[get4,setget4]= useState(false);
    const[get5,setget5]= useState(false);
    const[get6,setget6]= useState(false);
    const[get7,setget7]= useState(false);
    const[get8,setget8]= useState(false);
    const[get9,setget9]= useState(false);

    const[txt,settxt]= useState('');
    const [coin,setcoin] = useState(0);

   

        
    function getdata(x){

        if(temp%2 == 0){
            if(x==0){
                setgetdata1("O")
                setget1(true)
            }else if(x==1){
                setgetdata2("O")
                setget2(true)
            }else if(x==2){
                setgetdata3("O")
                setget3(true)
            }else if(x==3){
                setgetdata4("O")
                setget4(true)
            }else if(x==4){
                setgetdata5("O")
                setget5(true)
            }else if(x==5){
                setgetdata6("O")
                setget6(true)
            }else if(x==6){
                setgetdata7("O")
                setget7(true)
            }else if(x==7){
                setgetdata8("O")
                setget8(true)
            }else if(x==8){
                setgetdata9("O")
                setget9(true)
            }

        }else{

            if(x==0){
                setgetdata1("X")
                setget1(true)
            }else if(x==1){
                setgetdata2("X")
                setget2(true)
            }else if(x==2){
                setgetdata3("X")
                setget3(true)
            }else if(x==3){
                setgetdata4("X")
                setget4(true)
            }else if(x==4){
                setgetdata5("X")
                setget5(true)
            }else if(x==5){
                setgetdata6("X")
                setget6(true)
            }else if(x==6){
                setgetdata7("X")
                setget7(true)
            }else if(x==7){
                setgetdata8("X")
                setget8(true)
            }else if(x==8){
                setgetdata9("X")
                setget9(true)
            }
        }
        settemp(temp+1) 
       
    }
    function score(){
        setget1(true)
        setget2(true)
        setget3(true)
        setget4(true)
        setget5(true)
        setget6(true)
        setget7(true)
        setget8(true)
        setget9(true)

        

    }
    function checking(){
        if((getdata1=='X' && getdata2=='X' && getdata3=='X') || (getdata4=='X' && getdata5=='X' && getdata6=='X') || (getdata7=='X' && getdata8=='X' && getdata9=='X') || (getdata1=='X' && getdata4=='X' && getdata7=='X') || (getdata2=='X' && getdata5=='X' && getdata8=='X') || (getdata3=='X' && getdata6=='X' && getdata9=='X') || (getdata1=='X' && getdata5=='X' && getdata9=='X') ||(getdata3=='X' && getdata5=='X' && getdata7=='X')){
            getxwin();
            score();

            storeData(String(coin  + 20))
           
        }else if((getdata1=='O' && getdata2=='O' && getdata3=='O') || (getdata4=='O' && getdata5=='O' && getdata6=='O') || (getdata7=='O' && getdata8=='O' && getdata9=='O') || (getdata1=='O' &&       getdata4=='O' && getdata7=='O') || (getdata2=='O' && getdata5=='O' && getdata8=='O') || (getdata3=='O' && getdata6=='O' && getdata9=='O') || (getdata1=='O' && getdata5=='O' && getdata9=='O') ||(getdata3=='O' && getdata5=='O' && getdata7=='O')){
            getowin();
            score();

            storeData(String(coin  + 20))
         
        }
    } 
    
    function getowin(){
        // console.log(txt)
        settxt(("Winner : O"))
        

    }
    function getxwin(){
        // console.log(txt)
        settxt(("Winner : X"))
          
    }
    function reset(){
        setgetdata1('')
        setgetdata2('')
        setgetdata3('')
        setgetdata4('')
        setgetdata5('')
        setgetdata6('')
        setgetdata7('')
        setgetdata8('')
        setgetdata9('')

        setget1(false)
        setget2(false)
        setget3(false)
        setget4(false)
        setget5(false)
        setget6(false)
        setget7(false)
        setget8(false)
        setget9(false)

        settxt('')
       
    }




    // coin
    const storeData = async (value) => {

        try {
          await AsyncStorage.setItem('coin', value);
          console.log(coin);
        } catch (e) {
          // saving error
        }
      };

      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('coin');
          if (value !== null) {
            setcoin(parseInt(value))
            // value previously stored
          }
        } catch (e) {
          // error reading value
        }
      };
     useEffect(
            React.useCallback(()=>{
                getData();
            },[])
        )

        

   


    useEffect(() =>{
        checking()
    },[getdata1,getdata2,getdata3,getdata4,getdata5,getdata6,getdata7,getdata8,getdata9])

    
    
   return(
    <>
    <View style={style.main}>

        <View style={style.box}>
        <Pressable disabled={get1} onPress={()=>getdata(0)} style={style.box1}><Text style={style.boxtxt}>{getdata1}</Text></Pressable>
        <Pressable disabled={get2} onPress={()=>getdata(1)} style={style.box2}><Text style={style.boxtxt}>{getdata2}</Text></Pressable>
        <Pressable disabled={get3} onPress={()=>getdata(2)} style={style.box3}><Text style={style.boxtxt}>{getdata3}</Text></Pressable>
        <Pressable disabled={get4} onPress={()=>getdata(3)} style={style.box4}><Text style={style.boxtxt}>{getdata4}</Text></Pressable>
        <Pressable disabled={get5} onPress={()=>getdata(4)} style={style.box5}><Text style={style.boxtxt}>{getdata5}</Text></Pressable>
        <Pressable disabled={get6} onPress={()=>getdata(5)} style={style.box6}><Text style={style.boxtxt}>{getdata6}</Text></Pressable>
        <Pressable disabled={get7} onPress={()=>getdata(6)} style={style.box7}><Text style={style.boxtxt}>{getdata7}</Text></Pressable>
        <Pressable disabled={get8} onPress={()=>getdata(7)} style={style.box8}><Text style={style.boxtxt}>{getdata8}</Text></Pressable>
        <Pressable disabled={get9} onPress={()=>getdata(8)} style={style.box9}><Text style={style.boxtxt}>{getdata9}</Text></Pressable>

        <Text style={style.tx}>{txt}</Text>

        </View>

        <View style={{height:30,width:100,backgroundColor:'white',margin:20,borderRadius:20}}>
            <Pressable onPress={reset}>
                <Text style={{fontSize:22,textAlign:"center",fontWeight:'bold'}}>Reset</Text>
            </Pressable>
        </View>

        <View style={{flexDirection: 'row'}}>
        <Text style={style.coins}>🪙</Text>
        <Text style={style.coins}>{coin}</Text>
        </View>
    </View>
</>
   )
}
export default Tictac;
const style =StyleSheet.create({

    main:{
        // flex:0,
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        backgroundColor:'#072A40',
    },
    box:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    box1:{
        height:120,
        width:120,
        borderWidth:5,
        borderTopWidth:0,
        borderRightColor:'#07F3FB',
        borderBottomColor:'#07F3FB'
    },
    box2:{
        height:120,
        width:150,
        borderWidth:5,
        borderTopWidth:0,
        borderRightColor:'#07F3FB',
        borderBottomColor:'#07F3FB',
       
    },
    box3:{
        height:120,
        width:120,
        borderWidth:5,
        borderTopWidth:0,
        borderRightWidth:0,
        borderBottomColor:'#07F3FB',
    },
    box4:{
        height:130,
        width:120,
        borderWidth:5,
        borderRightColor:'#07F3FB',
        borderBottomColor:'#07F3FB',
    },
    box5:{
        height:130,
        width:150,
        borderWidth:5,
        borderRightColor:'#07F3FB',
        borderBottomColor:'#07F3FB',
    },
    box6:{
        height:130,
        width:120,
        borderWidth:5,
        borderBottomColor:'#07F3FB',
        borderRightWidth:0,
    },
    box7:{
        height:120,
        width:120,
        borderWidth:5,
        borderRightColor:'#07F3FB',
        borderBottomWidth:0,    
    },
    box8:{
        height:120,
        width:150,
        borderWidth:5,
        borderRightColor:'#07F3FB',
        borderBottomWidth:0,    
    },
    box9:{
        height:120,
        width:120,
        borderWidth:5,
        borderBottomWidth:0,
        borderRightWidth:0,
    },
    boxtxt:{
        fontSize:100,
        textAlign:'center',
        color:'#FB1349',
        textShadowColor:'#f0849d',
        textShadowOffset:{width:-5,height:2},
        textShadowRadius:10,
        fontFamily:'MV Boli',    
    },
    tx:{
        color:'white',
        fontSize:27,
        textAlign:'center',
    },
    coins: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
      },
   
})