import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';

interface ChatButtonProps {
  onPress: () => void;
  active?: boolean;
}

export const ChatButton: React.FC<ChatButtonProps> = ({
  active = false,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={styles.icon}
        source={
          active
            ? require('../../assets/ActiveMessages.png')
            : require('../../assets/Messages.png')
        }
      />
      <Text style={[styles.text, active && styles.activeText]}>Chats</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    color: '#919497',
  },
  activeText: {
    color: '#D9D9D9',
  },
});
