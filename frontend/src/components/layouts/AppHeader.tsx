import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import OptionsButton from '../buttons/OptionsButton';

interface HeaderProps {
  title: string;
  onOptionsPress: () => void;
}

export const AppHeader: React.FC<HeaderProps> = ({title, onOptionsPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <OptionsButton onPress={onOptionsPress} />
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../assets/ChangeChats.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.InputContainer}>
        <Image
          style={styles.iconInput}
          source={require('../../assets/SeachInput.png')}
        />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <View style={styles.foldersButtons}>
        <TouchableOpacity>
          <Text style={styles.folderButton}>All chats</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.folderButton}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 155,
    backgroundColor: '#4E72A6',
    padding: 20,
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 24,
    color: '#F8F8F8',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#4E72A6',
  },
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F8F8F8',
    padding: 10,
  },
  input: {
    flex: 1,
    width: '100%',
  },
  iconInput: {
    marginRight: 10,
  },
  foldersButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  folderButton: {
    fontSize: 14,
    color: '#F8F8F8',
  },
});
