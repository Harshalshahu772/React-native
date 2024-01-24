import React, {Component} from 'react';

import {Text, View, Button, TextInput} from 'react-native';
import ChildComponets from './ChildCompomtes';

class ClassComponet extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  Friut = (val) => {
    this.setState({name: val});
    
  };

  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>Class Component</Text>
        <Text style={{fontSize: 30}}>{this.state.name}</Text>
        <TextInput
          placeholder="enter your name"
          onChangeText={text => this.Friut(text)}></TextInput>
        <ChildComponets name={this.state.name} />
      </View>
    );
  }
}
export default ClassComponet;
