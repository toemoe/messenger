import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

interface OptionsButtonProps {
  onPress: () => void;
}

const OptionsButton: React.FC<OptionsButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={require('../../assets/Options.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4E72A6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OptionsButton;
