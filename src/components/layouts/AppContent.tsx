import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

export default function AppContent() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Web Content</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
