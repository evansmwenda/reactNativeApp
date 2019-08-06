import React , {Component} from 'react';
import {
    Text,
    View,
    ImageBackground,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import bgImage from '../images/background7.jpeg';
import Spinner from 'react-native-loading-spinner-overlay';


// import API from '../constants/endpoints.js'
const LOGIN_API= 'https://skytoptrial.000webhostapp.com/functions/User/login2.php';

class LoginScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      userName:'',
      userPassword:'',
      showIndicator:false,
      loading:false,
    }
  }

  componentDidMount() {
    //Setting a timer to show the spinner demo in every 3 second
    setInterval(() => {
      this.setState({
        //change the state of the laoding in every 3 second
        loading: !this.state.loading,
      });
    }, 3000);
  }


  

    loginUser = async() => {
      //function to change the state to true to view activity indicator
      this.setState({
        showIndicator: true
      });



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
      
      // //Check if showIndicator state is true the show indicator if not show button 
      // if(this.state.showIndicator){
      //   return (
      //     <View style={styles.container}>
      //       {/*Code to show Activity Indicator*/}
      //       <ActivityIndicator size="large" color="#0000ff" />
      //       {/*Size can be large/ small*/}
      //     </View>
      //   );  
      // }else{
      //   // 
      //   return(
      //     //add code here
      //     <ImageBackground style={styles.backgroundContainer} source={bgImage} >
      //       <View>
      //         <TextInput 
      //         placeholder={'Email/Username'} 
      //         style={styles.txtInput}
      //         onChangeText={userName => this.setState({userName})}/>
  
      //         <TextInput 
      //         placeholder={'Password'} 
      //         style={styles.txtInput}
      //         onChangeText={userPassword => this.setState({userPassword})}/>
  
      //         <TouchableHighlight
      //           style={styles.btnForm}
      //           onPress={this.loginUser}
      //         >
      //           <Text style={styles.btnText}>  LOGIN</Text>
      //       </TouchableHighlight>
  
      //       </View>
      //     </ImageBackground>
      //   );
      // }
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
      margin:10,
      padding:10,
      backgroundColor:'#fff',
      borderRadius:10,
    },
    btnForm:{
      width:300,
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
    }
  });

  export default LoginScreen