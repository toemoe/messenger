import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';

interface ContactButtonProps {
  onPress: () => void;
  active?: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onPress,
  active = false,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={styles.icon}
        source={
          active
            ? require('../../assets/ContactsActive.png')
            : require('../../assets/Contacts.png')
        }
      />
      <Text style={[styles.text, active && styles.activeText]}>Contacts</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#919497',
  },
  icon: {
    marginBottom: 5,
  },
  activeText: {
    color: '#D9D9D9',
  },
});
