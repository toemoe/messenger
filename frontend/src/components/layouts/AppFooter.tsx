import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ChatButton} from '../buttons/ChatButton';
import {ContactButton} from '../buttons/ContactButton';
import {ProfileButton} from '../buttons/ProfileButton';

interface FooterProps {
  onContactPress: (newTitle: string) => void;
}

export const AppFooter: React.FC<FooterProps> = ({onContactPress}) => {
  return (
    <View style={styles.container}>
      <ContactButton onPress={() => onContactPress('Contact')} />
      <ChatButton onPress={() => onContactPress('Chat')} />
      <ProfileButton onPress={() => onContactPress('Profile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
  },
});
