import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import bgImage from '../images/background11.jpeg';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

class IndexScreen extends Component{
    static navigationOptions = {
      header: null,
    }

    render(){ 
      return (
          //add code here
          <ImageBackground style={styles.backgroundContainer} source={bgImage} >
            <TouchableHighlight
                style={styles.btnForm}
                onPress={()=> {Actions.login()}}
              >
                <Text style={styles.btnText}> LOGIN</Text>
            </TouchableHighlight>
  
            <TouchableHighlight
                style={styles.btnForm}
                onPress={()=> {Actions.register()}}
              >
                <Text style={styles.btnText}> REGISTER</Text>
            </TouchableHighlight>
  
          </ImageBackground>
        
        );
    }
}

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

export default IndexScreen