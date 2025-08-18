import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function AppFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Web Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
