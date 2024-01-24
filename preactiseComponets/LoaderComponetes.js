import {useState} from 'react';
import {StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';

const LoaderComponetes = () => {
  const [count, setCount] = useState(false);

  const MyFunction = () => {
    setCount(true);

    setTimeout(() => {
      setCount(false);
    }, 5000);
  };
  return (
    <>
      <View style={style.main}>
        <ActivityIndicator size={60} color={'red'} animating={count} />
        <ActivityIndicator size={50} color={'green'} animating={count} />

        <Button style={{fontSize: 30}} title="Click" onPress={MyFunction} />
      </View>
    </>
  );
};
const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LoaderComponetes;
