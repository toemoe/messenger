import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

interface ContactButtonProps {
  onPress: () => void;
}

export const ContactButton: React.FC<ContactButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Contact</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});
