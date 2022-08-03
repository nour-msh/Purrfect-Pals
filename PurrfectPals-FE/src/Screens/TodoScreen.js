import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Todo() {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>TODO LIST</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
});