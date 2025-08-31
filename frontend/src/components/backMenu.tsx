import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function backMenu() {
  return (
    <View style={styles.container}>
      <Text>Options</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272F3A',
    color: '#F8F8F8',
  },
});
