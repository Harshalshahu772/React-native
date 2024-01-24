import React, {useState} from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';
import Exstyle from './style';
const StyleComponets = () => {
  const [name, setName] = useState('');
  const handleFuncation = event => {
    setName(event);
  };
  return (
    <>
      <Text style={[style.TextBox, Exstyle.TextBox]}>Hello world</Text>
      <Text style={[style.TextBox, Exstyle.TextBox]}>
        Show you name :{name}
      </Text>
      <TextInput
        style={style.TextInput}
        placeholder="your name"
        value={name}
        onChangeText={handleFuncation}
      />
    </>
  );
};

const style = StyleSheet.create({
  TextBox: {
    color: 'green',
    fontFamily: 'bold',
    fontSize: 30,
  },
  TextInput: {
    borderwidth: 2,
    padding: 30,
    borderColor: 'yellow',
    margin: 10,
    fontSize: 30,
  },
});

export default StyleComponets;
