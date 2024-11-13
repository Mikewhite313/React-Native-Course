import { View, Text, Button } from 'react-native'
import React from 'react'

const OnPress = () => {
    const getName = ()=> {
        console.log('Welcome to Shahji')

    }
  return (
    <View>
      <Text>OnPress</Text>
      <Button title='Press Me Here' onPress={getName}/>
      {/* <Button title='Press Me Here' onPress={()=> getName('Shahji')}/> */}
    </View>
  )
}

export default OnPress