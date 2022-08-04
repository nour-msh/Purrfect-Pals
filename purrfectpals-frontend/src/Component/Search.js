import { useState } from "react";
import { Searchbar } from "react-native-paper";
import axios from "axios";

const SearchComponent = ({ posts, setPosts }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    // console.warn(posts);
    let filtered = posts?.filter((x) => x.pet_name?.includes(query));
    setSearchQuery(filtered);
    setPosts(filtered);
    if (query === "") {
      axios({
        method: "GET",
        url: `http://192.168.1.4:5000/user/getPosts`,
      }).then((res) => {
        console.log(res.data);
        setPosts(res.data);
      });
    }
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 30,
        elevation: 2,
        backgroundColor: "white",
      }}
    />
  );
};

export default SearchComponent;
