import { View, Text, Button } from 'react-native'
import {React, useState} from 'react'

const UseStateHook = () => {
    const [name, setName] = useState('John Doe');
    const updateName = () => {
        setName('Syed Anas Ahmed'); 
    };
  return (
    <View>
      <Text style={{fontSize:30}} >UseStateHook</Text>
      <Text style={{fontSize:30}} >Name: {name}</Text>
      <Button title='Update Name' onPress={updateName}/>
    </View>
  )
}

export default UseStateHook