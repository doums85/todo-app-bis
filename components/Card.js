import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// props = property => Fourni par React
export default function Card(props) {
  console.log(props);
  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.age} years old</Text>
      <Text>{props.job}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
