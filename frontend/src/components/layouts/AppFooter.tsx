import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ChatButton} from '../buttons/ChatButton';
import {ContactButton} from '../buttons/ContactButton';
import {ProfileButton} from '../buttons/ProfileButton';

interface FooterProps {
  onContactPress: (newTitle: string) => void;
}

export const AppFooter: React.FC<FooterProps> = ({onContactPress}) => {
  const [activeTab, setActiveTab] = React.useState<'contacts' | 'chats' | 'profile'>('chats');
  return (
    <View style={styles.container}>
      <ContactButton
        active={activeTab === 'contacts'}
        onPress={() => {
          setActiveTab('contacts');
          onContactPress('Contacts');
        }}
      />
      <ChatButton
        active={activeTab === 'chats'}
        onPress={() => {
          setActiveTab('chats');
          onContactPress('Chats');
        }}
      />
      <ProfileButton
        active={activeTab === 'profile'}
        onPress={() => {
          setActiveTab('profile');
          onContactPress('Profile');
        }}
      />
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
    height: 65,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2C2C2D',
  },
});
