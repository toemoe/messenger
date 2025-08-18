import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Web Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
