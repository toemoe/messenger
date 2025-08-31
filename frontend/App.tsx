import React from 'react';
import {AppHeader} from './src/components/layouts/AppHeader';
import {AppFooter} from './src/components/layouts/AppFooter';
import AppContent from './src/components/layouts/AppContent';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import BackMenu from './src/components/backMenu';

const {width: screenWidth} = Dimensions.get('window');

function App(): React.JSX.Element {
  const [title, setTitle] = React.useState('Welcome');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const animation = React.useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    Animated.timing(animation, {
      toValue: isMenuOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsMenuOpen(!isMenuOpen);
  };

  const menuWidth = screenWidth * 0.8;

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, screenWidth * 0.8],
  });

  return (
    <View style={styles.main}>
      <Animated.View style={{flex: 1, transform: [{translateX}]}}>
        <SafeAreaView style={styles.container}>
          <AppHeader title={title} onOptionsPress={toggleMenu} />
          <AppContent />
          <AppFooter onContactPress={setTitle} />
        </SafeAreaView>
      </Animated.View>

      <Animated.View style={[
        styles.menu,
        {
          transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [menuWidth, 0],
                }),
              },
            ],
          },
        ]}>
        <BackMenu />
      </Animated.View>

      {isMenuOpen && (
        <TouchableOpacity
          style={styles.TouchableOpacityStyle}
          onPress={toggleMenu}
        />
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
    paddingVertical: 10,
  },
  menu: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: screenWidth * 0.8,
    height: '100%',
    zIndex: 10,
    padding: 20,
  },
  menuButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screenWidth * 0.2,
    height: '100%',
  },
});

export default App;
