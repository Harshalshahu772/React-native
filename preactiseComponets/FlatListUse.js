const {View, Text, FlatList, StyleSheet, ScrollView} = require('react-native');

const FlatListUse = () => {
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
        <Text style={{fontSize: 30}}>use the FlatListUse</Text>
        <ScrollView>
          {DATA.map(item => (
            <Text style={style.item}>{item.name}</Text>
          ))}
        </ScrollView>
      </View>
      {/* <FlatList
          data={DATA}
          renderItem={({item}) => <Text style={style.item}>{item.name}</Text>}
          keyExtractor={item => item.id}
        /> */}
    </>
  );
};

const style = StyleSheet.create({
  item: {
    backgroundColor: 'gray',
    color: 'blue',
    // borderWidth:10
    height: 50,
    margin: 5,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 20,
    padding: 10,
  },
});
export default FlatListUse;
