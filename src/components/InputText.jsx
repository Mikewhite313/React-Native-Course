import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

const InputText = () => {
    const [username, setUsername] = React.useState('');
  return (
    <View>
      <Text style={{fontSize:30}} >InputText</Text>
      <Text style={{fontSize:30}} >Username: {username}</Text>
      <TextInput style={{fontSize:20,borderWidth:2, borderColor: 'green', margin:10}} value={username} placeholder='Enter Your UserName Here' onChangeText={(data)=> setUsername(data)} />
        <Button title='clear' onPress={() => setUsername('')}/>
    </View>
  )
}

export default InputText