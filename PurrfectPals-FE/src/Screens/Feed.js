import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TextInput, Text } from "react-native";
import Vet from "../Component/Vet";
import axios from "axios";
import { useContext } from "react";
import Post from "../Component/Post";
import { UserContext } from "../../App";
import SearchComponent from "../Component/Search";


function Feed({ navigation }) {
  const { userId, userToken, userFullName } = useContext(UserContext);

  const [posts, setPosts] = useState([]);
  const [vets, setVets] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://192.168.1.4:5000/user/getPosts`,
    }).then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);
    useEffect(() => {
    axios({
      method: "GET",
      url: `http://192.168.1.4:5000/user/getVets`,
    }).then((res) => {
      console.log(res.data);
      setVets(res.data);
    });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={styles.name}>Hello {userFullName},</Text>
          <SearchComponent posts={posts} setPosts={setPosts} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.Vets}>
            {vets.map((vet) => {
              return <Vet name={vet.full_name} nav={navigation} />;
            })}
          </View>
        </ScrollView>
        <View style={styles.Posts}>
          {posts.map((post) => {
            // console.warn(post);
            return (
              <Post
                key={post._id}
                nav={navigation}
                petImage={post.image}
                pet_name={post.pet_name}
                duration={post.duration}
                description={post.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  name: {
    fontSize: 30,
    fontWeight: "400",
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    // marginLeft:31,
    marginTop: 50,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  userName: {
    marginTop: 10,
  },
  Vets: {
    display: "flex",
    flexDirection: "row",
    // marginLeft:20
  },
});

export default Feed;
