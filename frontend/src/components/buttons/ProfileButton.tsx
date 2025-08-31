import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';

interface ProfileButtonProps {
  onPress: () => void;
  active?: boolean;
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({
  onPress,
  active = false,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={styles.icon}
        source={
          active
            ? require('../../assets/ProfileActive.png')
            : require('../../assets/Profile.png')
        }
      />
      <Text style={[styles.text, active && styles.activeText]}>Profile</Text>
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
