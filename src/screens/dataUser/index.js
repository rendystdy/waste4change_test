import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

import {Button, CartItem} from '../../components';

const DataUser = ({navigation, route}) => {
  const [isLoading, setisLoading] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const netInfo = useNetInfo();

  useEffect(() => {
    setisLoading(true);
    getDataUser();
  }, []);

  const getDataUser = async () => {
    const optionHeaders = {
      headers: {
        key: route.params.name,
      },
    };

    try {
      let response = await Axios.get(
        'http://api.demo.waste4change.com/user/all',
        optionHeaders,
      );
      if (response.status === 200) {
        setTimeout(() => {
          setisLoading(false);
          setDataUser(response.data);
        }, 3000);
      }
    } catch (error) {
      // alert(error);
      setTimeout(() => {
        setisLoading(false);
      }, 3000);
    }
  };
  if (isLoading) {
    return <ActivityIndicator color="red" />;
  }

  return (
    <View style={styles.container}>
      <Button
        title="Tambah"
        onPress={() => navigation.navigate('Input User')}
      />
      {dataUser &&
        dataUser.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              email={item.email}
              status={netInfo.isConnected ? ' ' : 'Menunggu koneksi'}
            />
          );
        })}
    </View>
  );
};

export default DataUser;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#EFEFEF',
  },
});
