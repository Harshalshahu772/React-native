import {useEffect, useState} from 'react';
import {Text, Button} from 'react-native';

const StateHokks = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.warn('mount');
  });
 
  const myFunction = () => {
    setNum(num + 1);
  };

  return (
    <>
      <Text style={{fontSize: 30}}>StateHokks</Text>
      <Button title="submit" onPress={myFunction}></Button>
      <Text style={{fontSize: 30}}>{num}</Text>
    </>
  );
};
export default StateHokks;
