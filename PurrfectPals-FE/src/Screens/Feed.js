import {Image,Text,View} from "react-native";

function Feed(){
    return(
        <View>
            <View>
                <Image source={require('../../assets/profile-pic.jpeg')}/>
                <Text>User's Name</Text>
            </View>
        </View>
    )
}