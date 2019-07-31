/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';





const LOGIN_API = 'https://skytoptrial.000webhostapp.com/functions/User/login2.php';


class HomeScreen extends Component{
  static navigationOptions = {
    header: null,
  }
  render(){
    return (
        //add code here
        <View style={styles.container}>
          <Text>THIS IS THE HOME SCREEN</Text>

           <Button 
            style={styles.btnForm}
            title="GOTO DETAILS SCREEN"
            onPress={()=> {this.props.navigation.navigate('Details')}}
            /> 

        </View>
      
      );
  }
}


class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Raashin',
    headerRight: <View />
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button 
            style={styles.btnForm}
            title="GOTO HOME SCREEN"
            onPress={()=> {this.props.navigation.navigate('Home')}}
            /> 
        
      </View>
    );
  }
}




type Props ={};
class App3 extends Component<Props>{
  constructor(props){
    super(props);
    this.state={
      userName:'',
      userPassword:'',
    }
  }



   registerUser = async() => {
    //get the field data
    const {userName} = this.state;
    const {userPassword} = this.state;
    // alert(userName);

    try{
      //do fetch here
      let response =  await fetch(LOGIN_API,{
        method:'POST',
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email_address:userName,
          password:userPassword,
        }),
      });
      let responseJson = await response.json();
      alert(responseJson.reply);//check if the status == true or false
    } catch(error){
      console.error(error);
      alert("error");
    }
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
    Details:DetailsScreen
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
  container:{
    flex:1,
    alignItems:'center',
  },
  txtInput:{
    width:300,
    margin:10,
  },
  btnForm:{
    width:300,
  },
});

export default App3

