import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonRounded = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapperButton} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonRounded;

const styles = StyleSheet.create({
  wrapperButton: {
    backgroundColor: '#30AEE4',
    borderRadius: 5,
    padding: 10,
    height: 50,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
  },
});
