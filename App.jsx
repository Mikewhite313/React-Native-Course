import { View, Text, Button, ImageBackground } from 'react-native';
import React from 'react';
import First from './src/components/First';
import JSX from './src/components/JSX';
import OnPress from './src/components/OnPress';
import UseStateHook from './src/components/UseStateHook';
import Props from './src/components/Props';

const App = () => {
  return (
    <View>
      {/* <Text style = {{fontSize: 50 }}>Hello World</Text>
      <Button title='Press Me Here'/>
      <First/> */}
      {/* <JSX/> */}
      {/* <OnPress/> */}
      {/* <UseStateHook/> */}
      <Props/>
    </View>
  );
};

export default App;