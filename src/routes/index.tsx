import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './StackNav';

export function Routes() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
