import React from 'react';
import {AppHeader} from './src/components/layouts/AppHeader';
import {AppFooter} from './src/components/layouts/AppFooter';
import AppContent from './src/components/layouts/AppContent';
import {SafeAreaView, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  const [title, setTitle] = React.useState('Welcome');
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title={title} />
      <AppContent />
      <AppFooter onContactPress={setTitle} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
});

export default App;
