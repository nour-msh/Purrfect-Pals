import { StyleSheet,Text,View } from "react-native";

function CategoryBox(){
    return(
        <View style={styles.container}>
            <Text style={styles.petType}>Dogs</Text>
        </View>
    )
}

const styles=StyleSheet.create({
container:{
    width:64,
    height:64,
    borderRadius:20,
    backgroundColor:'#FF914A',
    marginTop:50,
    marginLeft:15



},
petType:{
    fontSize:17,
    color:"white",
    textAlign:'center',
    marginTop:18
}
})

export default CategoryBox