import React, {Component} from 'react';

import {Text, View} from 'react-native';

class ChildComponets extends React.Component {
  handleFunction = () => {};

  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>Child Componets </Text>
        <Text style={{fontSize: 30}}>{this.props.name}</Text>
      </View>
    );
  }
}
export default ChildComponets;
