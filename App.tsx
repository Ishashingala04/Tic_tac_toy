import React from "react";
import Tictac from "./Tictac";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tictac_home from "./Tictac_home";
import Metrixpage from "./Metrixpage";



const Stack = createNativeStackNavigator();
function App(){
  return(
    <>

  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Tictac_home} />
        <Stack.Screen name="Game" component={Metrixpage} />
        <Stack.Screen name="Level1" component={Tictac} />
      </Stack.Navigator>
    
    </NavigationContainer>

    {/* <Tictac></Tictac> */}

        
    </>
  )
}
export default App;
