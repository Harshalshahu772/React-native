import { useState } from 'react';
import {Button, Text, View, StyleSheet, module, Modal} from 'react-native';

const ModulerPop = () => {
    const [showCase , setShowCase ] = useState(false);
  return (
    <>
      <View style={style.main}
      
      >
        <Modal transparent={true}
        visible={showCase}
        >
          <View style={style.cardContainer}>
            <View style={style.module}>
              <Text style={{fontSize: 40}}>Hello world</Text>
              <View style={{marginTop: 10}}>
              <Button title="submit" onPress={()=>setShowCase(false)} />
              </View>
            </View>
          </View>
        </Modal>
        <View style={style.Button}>
          <Button title="submit" onPress={()=>setShowCase(true)} />
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'pink',
  },

  Button: {
    // display:"flex"
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  module: {
    backgroundColor: 'skyblue',
    margin: 60,
    alignItems: 'center',
    padding: 30,
    width: 300,

    shadowColor: 'black',
    elevation: 10,
    borderRadius: 20,
  },
});
export default ModulerPop;
