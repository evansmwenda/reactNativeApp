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
} from 'react-native'
const LOGIN_API = 'https://skytoptrial.000webhostapp.com/functions/User/login2.php';


class App3 extends Component{
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
        <View style={styles.container}>
          <TextInput 
            placeholder="Username/Email"
            style={styles.txtInput}
            onChangeText={userName => this.setState({userName})}
          />

          <TextInput 
            placeholder="Password"
            style={styles.txtInput} 
            onChangeText={userPassword => this.setState({userPassword})}
            />

           <Button 
            style={styles.btnForm}
            title="Sign up"
            onPress={this.registerUser}

            /> 

        </View>
      
      );
  }
}

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

