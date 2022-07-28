import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import axios from 'axios';


const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{marginTop:20,
         marginBottom:20,
         borderRadius:30,
         elevation:2,
         backgroundColor:'white',
        }}
    />
  );
};

export default MyComponent;