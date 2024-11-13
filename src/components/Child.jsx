import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
    let count = props.data;
    let items = props.items;

  return (
    <View>
      <Text style = {{fontSize:30}} >Counter</Text>
      <Text style = {{fontSize:30}} >{count}</Text>
      <Text style = {{fontSize:30}} >{items}</Text>
    </View>
  )
}

export default Child