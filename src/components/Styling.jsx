import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../style/style'

const Styling = () => {
  return (
    <View>
      <Text style = {{fontSize:30}} >Inline Styling</Text>
      <Text style = {style.text} >Internal Styling</Text>
      <Text style = {styles.text} >External Styling</Text>    </View>
  )
}

const style = StyleSheet.create({
    text: {
        backgroundColor: 'yellow',
        color:'Black',
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth:3,

    }
    })

export default Styling