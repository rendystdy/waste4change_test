import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput} from '../../components';
import Axios from 'axios';

const InputUser = ({navigation}) => {
  const [dataUser, setDataUser] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });

  const handleOnChange = (type, value) => {
    setDataUser({
      ...dataUser,
      [type]: value,
    });
  };

  const handleSave = async () => {
    let bodyFormData = new FormData();
    bodyFormData.append('name', dataUser.firstName);
    bodyFormData.append('email', dataUser.email);
    const optionHeaders = {
      headers: {
        'Content-Type': 'multipart/form-data',
        key: dataUser.firstName,
      },
    };

    try {
      let response = await Axios.post(
        'http://api.demo.waste4change.com/user/add',
        bodyFormData,
        optionHeaders,
      );
      if (response.status === 200) {
        navigation.navigate('Data User', {name: dataUser.firstName});
      }
    } catch (error) {
      // alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        title="Email"
        placeholder="Email"
        value={dataUser.email}
        onChange={(value) => handleOnChange('email', value)}
        keyboardType="email-address"
      />
      <TextInput
        title="Nama Depan"
        placeholder="Nama Depan"
        value={dataUser.firstName}
        onChange={(value) => handleOnChange('firstName', value)}
      />
      <TextInput
        title="Nama Belakang"
        placeholder="Nama Belakang"
        value={dataUser.lastName}
        onChange={(value) => handleOnChange('lastName', value)}
      />
      <Button onPress={handleSave} title="Simpan" />
    </View>
  );
};

export default InputUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
