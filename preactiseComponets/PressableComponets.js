import {Button, Pressable, StyleSheet, Text, View} from 'react-native';

const PressableComponets = () => {
  const MyFunction = () => {
    console.log('on press in');
  };
  return (
    <>
      <View style={style.main}>
        <Pressable onPressIn={MyFunction}>
          <View style={style.inner}>
            <Text style={style.PressText}>onPress in</Text>
          </View>
        </Pressable>
        <Pressable onPressOut={MyFunction}>
          <View style={style.inner}>
            <Text style={style.PressText}>onPress Out</Text>
          </View>
        </Pressable>
        <Pressable onLongPress={MyFunction}>
          <View style={style.inner}>
            <Text style={style.PressText}>onPress in</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  main: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',

    flex: 1,
  },
  inner: {
    backgroundColor: 'yellow',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
    marginBottom: 10,
  },
  PressText: {
    fontSize: 30,
    color: 'green',
  },
});
export default PressableComponets;
