import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import Exstyle from './style';
import {useState} from 'react';

const FromePreactise = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resertForm = () => {
    setDisplay(false),
      setEmail(''),
      setLastName(''),
      setPassword(''),
      setName('');
  };

  return (
    <>
      <Text style={Exstyle.TextBox}>FromePreactise</Text>
      <View>
        <TextInput
          style={style.TextInput}
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Enter your Name"
        />

        <TextInput
          style={style.TextInput}
          value={lastName}
          onChangeText={e => setLastName(e)}
          placeholder="Enter Last Name"
        />
        <TextInput
          style={style.TextInput}
          value={email}
          onChangeText={e => {
            setEmail(e);
          }}
          placeholder="Enetr Your Email"
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={e => {
            setPassword(e);
          }}
          style={style.TextInput}
          placeholder="Enater Your Password"
        />
        <Button
          color={'green'}
          onPress={() => {
            setDisplay(true);
          }}
          title="Eneter Button"
        />
        <View style={{marginTop: 10}}>
          <Button onPress={resertForm} title="Eneter Button" />
        </View>

        {display ? (
          <View>
            <Text style={{fontSize: 30}}>{name}</Text>
            <Text style={{fontSize: 30}}>{lastName}</Text>
            <Text style={{fontSize: 30}}> {email}</Text>
            <Text style={{fontSize: 30}}> {password}</Text>
          </View>
        ) : null}
      </View>
    </>
  );
};

const style = StyleSheet.create({
  TextInput: {
    borderColor: 'blue',
    borderWidth: 2,
    textAlign: 'center',
    margin: 10,
  },
});
export default FromePreactise;
