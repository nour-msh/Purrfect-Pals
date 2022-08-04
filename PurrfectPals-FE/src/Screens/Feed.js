import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useFonts,Chilanka_400Regular } from '@expo-google-fonts/chilanka';
import AppLoading from 'expo-app-loading';
import axios from "axios";

import Vet from "../Component/Vet";
import Post from "../Component/Post";
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
  }, [posts])
    useEffect(() => {
    axios({
      method: "GET",
      url: `http://192.168.1.4:5000/vet/getVets`,
    }).then((res) => {
      console.log(res.data);
      setVets(res.data);
    });
  }, []);

  let [fontsLoaded] = useFonts({
    Chilanka_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={styles.name}>Hi {userFullName},</Text>
          <SearchComponent posts={posts} setPosts={setPosts} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.Vets}>
            {vets.map((vet) => {
              return <Vet vetData={vet} nav={navigation} />;
            })}
          </View>
        </ScrollView>
        <View style={styles.Posts}>
          {posts.map((post) => {
            return (
              <Post
                key={post._id}
                nav={navigation}
                petImage={post.image}
                petName={post.pet_name}
                duration={post.duration}
                description={post.description}
                petBreed={post.breed}
                pet_name={post.pet_name}
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
    fontFamily: 'Chilanka_400Regular',
    marginLeft:10
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
