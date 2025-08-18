import React from 'react';
import AppHeader from './src/components/layouts/AppHeader';
import AppFooter from './src/components/layouts/AppFooter';
import AppContent from './src/components/layouts/AppContent';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeContent}>
      <View style={styles.container}>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContent: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
