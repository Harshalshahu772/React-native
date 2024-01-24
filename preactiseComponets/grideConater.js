import {styled} from '@material-ui/core';

const {ResetTvOutlined} = require('@mui/icons-material');
const {View, Text, StyleSheet, ScrollView, FlatList} = require('react-native');

const GrideContainer = () => {
  const DATA = [
    {
      id: 1,
      name: 'First Item',
    },
    {
      id: 2,
      name: 'Second Item',
    },
    {
      id: 3,
      name: 'Third Item',
    },
    {
      id: 4,
      name: 'Four Item',
    },
    {
      id: 5,
      name: 'Five Item',
    },
    {
      id: 6,
      name: 'Six Item',
    },
    {
      id: 7,
      name: 'Sevan Item',
    },
    {
      id: 8,
      name: 'Egight Item',
    },
    {
      id: 9,
      name: 'nine Item',
    },
    {
      id: 10,
      name: 'ten Item',
    },
  ];
  return (
    <>
      <View>
        <Text style={{fontSize: 30}}>Girde Layout </Text>

        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {DATA.map(item => (
            <Text style={style.Text}>{item.name}</Text>
          ))}
        </View>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  Text: {
    backgroundColor: 'pink',
    fontSize: 20,
    width: 150,
    height: 120,
    margin: 3,
    // padding: 10,
    textAlign: 'center',
  },
});
export default GrideContainer;
