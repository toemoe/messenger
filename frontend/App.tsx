import React from 'react';
import {AppHeader} from './src/components/layouts/AppHeader';
import {AppFooter} from './src/components/layouts/AppFooter';
import AppContent from './src/components/layouts/AppContent';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import BackMenu from './src/components/backMenu';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

function App(): React.JSX.Element {
  const [title, setTitle] = React.useState('Welcome');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.container}>
        <AppHeader title={title} onOptionsPress={toggleMenu} />
        <AppContent />
        <AppFooter onContactPress={setTitle} />
      </SafeAreaView>

      {isMenuOpen && (
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <BackMenu />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={toggleMenu}>
              <View style={styles.closeInner} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  overlay: {
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: '100%',
    height: '100%',
    backgroundColor: '#272F3A',
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: 35,
    right: 20,
    padding: 10,
  },
  closeInner: {
    width: 20,
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
});

export default App;
