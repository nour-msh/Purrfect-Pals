import * as React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet,TouchableOpacity, Text, View, Dimensions } from 'react-native';

export default function App() {

    const [pin,setPin]= React.useState({
        latitude:33.888630 ,
        longitude:35.495480})
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      region={{
        latitude:33.888630 ,
        longitude:35.495480,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      provider="google" >

      <Marker coordinate={pin} 
        pinColor='#FF914A'
        draggable={true}
        onDragStart={(e)=>{
            console.log("Drag start", e.nativeEvent.coordinate)
        }}
        onDragEnd={(e)=>{
            setPin({

                latitue: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude
            })
        }}
        >
            <Callout>
                <Text>Purrfect</Text>
            </Callout>
        </Marker>
    </MapView>
    <TouchableOpacity style={styles.saveButton}>
      <Text style={styles.saveText}>
      Save
      </Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});