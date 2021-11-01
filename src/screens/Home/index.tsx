import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorld}>Hello world</Text>
    </View>
  );
};
