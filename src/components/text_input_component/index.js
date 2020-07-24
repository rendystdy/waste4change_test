import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputCustom,
} from 'react-native';

const TextInput = ({title, placeholder, onChange, value, keyboardType}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInputCustom
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        style={styles.textInputStyle}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  textInputStyle: {
    borderColor: '#D7D7D7',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    color: '#AAA9AA',
    fontWeight: '900',
    marginBottom: 5,
  },
});
