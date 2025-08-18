import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

interface ProfileButtonProps {
  onPress: () => void;
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Profile</Text>
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
