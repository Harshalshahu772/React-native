import {Text, Button} from 'react-native';
import ChildComponets from './ChildCompomtes';
import {useEffect, useState} from 'react';

const UseEffeactProps = () => {
  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(true);
  return (
    <>
      <Text style={{fontSize: 40, color: 'pink'}}>Preant Componet</Text>
      <Button title="click hear" onPress={() => setShow(!show)}></Button>

      {show ? <User/> : null}
    </>
  );
};

const User = props => {
 
  useEffect(()=>{
   return ()=>{
    console.warn("unmount ")
   }
  },[])
  return (
    <>
      <Text style={{fontSize: 40, color: 'green'}}>
        Chiled Componets{props.number}
      </Text>
    </>
  );
};
export default UseEffeactProps;
