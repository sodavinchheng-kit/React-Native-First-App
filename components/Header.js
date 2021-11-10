import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'No Title',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Header;
