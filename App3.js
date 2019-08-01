/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *Author : Evans Mwenda
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import bgImage from './images/background5.jpeg';
import { TouchableHighlight } from 'react-native-gesture-handler';
import LoginScreen   from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';




class HomeScreen extends Component{
  static navigationOptions = {
    header: null,
  }
  render(){ 
    return (
        //add code here
        <ImageBackground style={styles.backgroundContainer} source={bgImage} >
          <TouchableHighlight
              style={styles.btnForm}
              onPress={()=> {this.props.navigation.navigate('Login')}}
            >
              <Text style={styles.btnText}> LOGIN</Text>
          </TouchableHighlight>

          <TouchableHighlight
              style={styles.btnForm}
              onPress={()=> {this.props.navigation.navigate('Register')}}
            >
              <Text style={styles.btnText}> REGISTER</Text>
          </TouchableHighlight>

        </ImageBackground>
      
      );
  }
}

type Props ={};
class App3 extends Component<Props>{
  constructor(props){
    super(props)
  }
  render(){
    return (
        //add code here
        <AppContainer/>
        
    
      );
  }
}

const RootStack =createStackNavigator(
  {
    Home:HomeScreen,
    Register:RegisterScreen,
    Login:LoginScreen,
  },
  {
      initialRouteName:'Home',
      defaultNavigationOptions:{
        headerStyle:{
          backgroundColor:"#1e90ff"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          textAlign:'center',
          flex:1
        }
      }
  }
);

const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  backgroundContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  btnForm:{
    width:300,
    height:70,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#602518',//5d2d23
    borderRadius:35,
    marginBottom:20,
  }, 
  btnText:{
    color:'#fff',
    fontSize:22,
  }
});


export default App3

