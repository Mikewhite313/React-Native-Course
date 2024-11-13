import { View, Text } from 'react-native'
import React from 'react'

const JSX = () => {
    let name = ' Shahji'
    let Age = 20
    let Gender = 'Male'
  return (
    <View>
      <Text style={{fontSize:50}}>JSX</Text>
      <Text style={{fontSize:30}}> Name: {name} </Text>
      <Text style={{fontSize:30}}> Age: {Age} </Text>
      <Text style={{fontSize:30}}> Gender: {Gender} </Text>
    </View>
  );
};

export default JSX;