import React from 'react';
import { Text } from 'react-native';
import SafeViewForDevice from './helper/SafeViewForDevice';

const App = () => {
  return (
    <SafeViewForDevice>
      <Text>Let's go</Text>
    </SafeViewForDevice>
  );
};

export default App;