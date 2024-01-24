import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const radioOptions = [
  {
    id: 1,
    option: 'radio button 1',
  },
  {
    id: 2,
    option: 'radio button 2',
  },
  {
    id: 3,
    option: 'radio button 3',
  },
  {
    id: 4,
    option: 'radio button 4',
  },
];

const RadioCompontes = () => {
  const [select, setSelect] = useState(1);
  return (
    <>
      <View style={style.main}>
        {radioOptions.map(option => (
          <TouchableOpacity
            key={option.id}
            onPress={() => setSelect(option.id)}>
            <View style={style.container}>
              <View style={style.checkBox}>
                {select == option.id ? (
                  <View style={style.selected}></View>
                ) : null}
              </View>

              <Text style={style.radioText}>{option.option}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  container: {
    flexDirection: 'row',
    width: 200,
    alignItems: 'center',
    height: 50,
  },
  radioText: {
    fontWeight: '300',
    fontSize: 20,
    textAlign: 'center',
  },
  checkBox: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
    borderRadius: 20,
  },
  selected: {
    width: 30,
    height: 30,
    backgroundColor: 'pink',
    margin: 3,
    borderRadius: 20,
  },
});

export default RadioCompontes;
