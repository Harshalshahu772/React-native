import {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const Preactise = () => {
  const [name, setName] = useState('Hello Bhart');
  const fruit = () => {
    setName('Hellow world');
  };
  return (
    <>
      <View>
        {/* <Text style={{fontSize: 30}}></Text> */}
        <Button title="onclick" onPress={fruit} />
        <Fruit2 name={name}/>
      </View>
      
    </>
  );


};
const Fruit2 = (props) => {
  console.warn(props)
  return (
    <View>
      <Text style={{fontSize: 30}}>{props.name}</Text>
      
    </View>
  );
};

export default Preactise;
