import { View, Text, Button } from 'react-native'
import React from 'react'
import Child from './Child'

const Props = () => {
    const [count, setCount] = React.useState(0);
    const [items, setItem] = React.useState(10);
  return (
    <View>
      <Text style = {{fontSize:30}}>Props</Text>
      <Button title='Press Me' onPress={() => setCount(count + 1)}/>
        <Child data={count}/>
        <Button title='Add Item' onPress={() => setItem(items * 10)}/>
        <Child data={items}/>
    </View>
  )
}

export default Props