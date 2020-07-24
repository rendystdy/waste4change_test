import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CartItem = ({name, email, status}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.desc}>{email}</Text>
      </View>
      <Text style={styles.waitingConnection}>{status}</Text>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    height: 75,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'rgb(94,94,94)',
    marginBottom: 15,
  },
  desc: {
    fontWeight: '600',
    fontSize: 12,
    color: '#B8B8B8',
  },
  waitingConnection: {
    color: '#B8B8B8',
    fontWeight: '600',
    fontSize: 12,
  },
});
