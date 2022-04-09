import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,DefaultTheme, NavigationContainer} from '@react-navigation/native'
import {Home} from './screens'


const theme = {

  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:"transparent"
  }
}

 const Stack = createStackNavigator()



const App = () => {

return(

  <NavigationContainer theme={theme}>
    <Stack.Navigator
      intialRouteName = {'Home'}
    >

      <Stack.Screen name="Home" component={Home}/>

    </Stack.Navigator>

  </NavigationContainer>

)
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
