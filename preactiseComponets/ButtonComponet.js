import {StyleSheet, Text, TouchableHighlight} from 'react-native';

const ButtonComponet = () => {
  return (
    <>
      <TouchableHighlight>
        <Text style={style.button}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button, style.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button, style.red]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button, style.yellow]}>ok</Text>
      </TouchableHighlight>
    </>
  );
};
const style = StyleSheet.create({
  button: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    backgroundColor: 'pink',
    margin: 20,
    padding: 10,
    borderRadius: 15,
    shadowColor: 'black',
    elevation: 5,
    shadowOpacity: 1,
  },
  success: {
    backgroundColor: 'green',
  },
  red: {
    backgroundColor: 'red',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
});
export default ButtonComponet;
