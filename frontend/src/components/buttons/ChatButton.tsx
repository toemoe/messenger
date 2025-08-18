import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

interface ChatButtonProps {
  onPress: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Chat</Text>
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
