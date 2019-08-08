import React ,{ Component } from 'react'
import { 
  View,
  Text,
} from 'react-native';

class HomeScreen extends Component{
  render(){
    return(
      <View>
        <Text style={{fontSize:30,color:'red'}}>I am the home screen</Text>
        <Text style={{fontSize:30,color:'green'}}>you have logged in sir</Text>
      </View>
    )
  }
}

export default HomeScreen
