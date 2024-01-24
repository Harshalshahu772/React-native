const {View, Text, SectionList} = require('react-native');

const PreantComponetes = () => {
  const users = [
    {
      id: 1,
      name: 'First Item',
      data: ['php', 'anguler', 'react.js', 'react.native'],
    },
    {
      id: 2,
      name: 'Second Item',
      data: ['php', 'anguler', 'react.js', 'react.native'],
    },
    {
      id: 3,
      name: 'Third Item',
      data: ['php', 'anguler', 'react.js', 'react.native'],
    },
    {
      id: 4,
      name: 'Four Item',
      data: ['php', 'anguler', 'react.js', 'react.native'],
    },
    {
      id: 5,
      name: 'Five Item',
      data: ['php', 'anguler', 'react.js', 'react.native'],
    },
  ];
  return (
    <View>
      <SectionList
        sections={users}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, marginLeft: 50}}>{item}</Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 30, color: 'red'}}>{name}</Text>
        )}
      />
    </View>
  );
};

export default PreantComponetes;
