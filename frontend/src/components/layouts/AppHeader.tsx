import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface HeaderProps {
  title: string;
}

export const AppHeader: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
