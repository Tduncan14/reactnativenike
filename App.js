import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';

import {icons,COLORS,FONTS,SIZES} from './constants/index.js';


const Stack = createStackNavigator()

export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen name="Home" component={Home} options={{title:'SHOE SELECTOR', 
         headerTitleAlign: 'center',
         headerTintColor:COLORS.lightGray,
         headerTitleStyle:{
           ...FONTS.navTitle
         },
         headerLeft: ({onPress}) => (
           <TouchableOpacity
           style={{marginLeft:SIZES.padding}} onPress={onPress}>

             <Image
             source={icons.menu}
             resizeMode="contain"
             style={{
               width:25,
               height:25
             }}
             />


           </TouchableOpacity>
         )
         }}  />
       </Stack.Navigator>


     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
