import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{marginTop:20, marginBottom:20,borderRadius:20,elevation:0,borderColor:'#FF914A',backgroundColor:'transparent',borderWidth:1}}
    />
  );
};

export default MyComponent;