import React , {Component} from 'react';
import {
    Text,
    View,
    ImageBackground,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import bgImage from '../images/background6.jpeg';
import Spinner from 'react-native-loading-spinner-overlay';
import API from '../constants/endpoints';


class LoginScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      userName:'',
      userPassword:'',
      loading:false,
    }
  }

  
  // componentDidMount() {
  //   //Setting a timer to show the spinner demo in every 3 second
  //   setInterval(() => {
  //     this.setState({
  //       //change the state of the laoding in every 3 second
  //       loading: !this.state.loading,
  //     });
  //   }, 3000);
  // }


  

    loginUser = async() => {
      //get the field data
      const {userName} = this.state;
      const {userPassword} = this.state;
      // alert(userName);
  
      try{
        //do fetch here
        let response =  await fetch(API.LOGIN_URL,{
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
        this.setState({loading:false})
        alert(responseJson.reply);//check if the status == true or false
      } catch(error){
        this.setState({loading:false})
        console.error(error);
        alert("error");
      }
    }
    render(){
      if(this.state.loading){
        //if true->display the spinner
        return(
          <Spinner
            //visibility of Overlay Loading Spinner
            visible={this.state.loading}
            //Text with the Spinner 
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={styles.spinnerTextStyle}
          />
        );
      }else{
        return(
          //if false->display the input fields
          <ImageBackground style={styles.backgroundContainer} source={bgImage} >
            <View>
              <TextInput 
              placeholder={'Email/Username'} 
              style={styles.txtInput}
              onChangeText={userName => this.setState({userName})}/>
  
              <TextInput 
              placeholder={'Password'} 
              style={styles.txtInput}
              secureTextEntry={true}
              onChangeText={userPassword => this.setState({userPassword})}/>
  
              <TouchableHighlight
                style={styles.btnForm}
                onPress={this.loginUser}
              >
                <Text style={styles.btnText}>  LOGIN</Text>
              </TouchableHighlight>
              <View style={styles.signupField}>
                <Text style={styles.registerText}>Don't have an account?</Text>
                <Text style={styles.registerButton}>Register</Text>
              </View>
              
  
            </View>
          </ImageBackground>
        );
      }
    }
  }


  const styles = StyleSheet.create({
    backgroundContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    txtInput:{
      width:300,
      height:60,
      margin:6,
      fontSize:16,
      paddingHorizontal:20,
      backgroundColor:'#fff',
      borderRadius:35,
    },
    btnForm:{
      width:300,
      marginTop:10,
      height:60,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#602518',//5d2d23
      borderRadius:35,
      marginBottom:20,
    }, 
    btnText:{
      color:'#fff',
      fontSize:22,
    },
    signupField:{
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
    },
    registerText:{
      color:'rgba(255,255,255,0.6)',
      paddingEnd:5,
    },
    registerButton:{
      color:'#fff',
      fontWeight:'500',
    }
  });

  export default LoginScreen