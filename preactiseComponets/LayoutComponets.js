import {styled} from '@material-ui/core';
import {StyleSheet, Text, View} from 'react-native';

const LayoutComponets = () => {
  return (
    <>
      <View style={style.main}>
        <View style={style.box1}>
          <View style={style.inner1}></View>
          <View style={style.inner2}></View>
          <View style={style.inner3}></View>
        </View>
        <View style={style.box2}></View>
        <View style={style.box3}></View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 2,
    flexDirection: '',
  },

  inner1: {
    backgroundColor: 'yellow',
    margin: 10,
    flex: 1,
  },
  inner2: {
    backgroundColor: 'blue',
    margin: 10,
    flex: 1,
  },
  inner3: {
    backgroundColor: 'orange',
    margin: 10,
    flex: 1,
  },

  box1: {
    backgroundColor: 'skyblue',
    flex: 2,
    flexDirection: 'row',
  },
  box2: {
    backgroundColor: 'red',
    flex: 1,
  },
  box3: {
    backgroundColor: 'pink',
    flex: 1,
  },
});

export default LayoutComponets;
