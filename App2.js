import React, { Component } from 'react';
import { Text, Image , FlatList, ScrollView , Alert, Button, TextInput, View , StyleSheet, TouchableHighlight,TouchableNativeFeedback,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onPressButton(){
  	Alert.alert("you tapped button");
  }

  _onLongPressButton(){
  	Alert.alert("you long pressed button");
  }

  render() {
    return (
    	 <View style={styles.container}>
    	 	<FlatList 
    	 	   data={[
    	 	   	{key:"Kevin"},
    	 	   	{key:"Mitnick"},
    	 	   	{key:"Mike"},
    	 	   	{key:"Tyson"},
    	 	   	{key:"Eliud"},
    	 	   	{key:"Kipchoge"},
    	 	   	{key:"Scarlet"},
    	 	   	{key:"Reddington"},
    	 	   	{key:"Bowvinsky"},
    	 	   	{key:"Lockheed"},
    	 	   	{key:"Moses"},
    	 	   	{key:"Adam"},
    	 	   	{key:"Noah"},
    	 	   	{key:"Enoch"},
    	 	   	{key:"Martha"},
    	 	   	{key:"John"},
    	 	   	{key:"Jacinta"},
    	 	   	{key:"Janet"},
    	 	   	{key:"Oneal"},
    	 	   	{key:"Joshua"},
    	 	   	{key:"Japheth"}
    	 	   	]} 
    	 	   renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} 
    	 	   />

    	 </View>
    	

    );
}
 
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});