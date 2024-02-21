import React, { useState } from 'react';
import { Text, Pressable, Linking, View, Image, TextInput, Modal, TouchableOpacity, ScrollView, Button } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles/customStyles';
import { IMAGES } from '../../../assets/index';

import { ModalS } from '../ModalS';

const { LOGO } = IMAGES;

export function LoginScreen({ navigation }) {
  const [modal, setModal] = useState(false);

  const ModalFun = () => {
    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      <View>
        {
          modal === true &&
          <ModalS />
        }
      </View>

      {/* <Modal
animationType="fade"
 visible={modal}
 >
  <ScrollView   >
    <Text>
    <ModalS />

    </Text>
    <Text style={{
      color: 'green',
      textAlign: 'center',
      fontSize: 20,
      paddingBottom: '4%',
      paddingTop: '4%',
    }} onPress={ModalFun} >
      Принять
    </Text>
</ScrollView >
</Modal> */}

      <Text
        style={styles.header_title}
      >
        Добро пожаловать
      </Text>
      <Image style={styles.image} source={LOGO} />
      {/* <StatusBar style="auto" /> */}
      <View>
        <TextInput
          placeholder="Номер мобильного телефона"
          style={styles.test_input}
        />
        <Text
          style={styles.text_field_description}
        >
          Для входа в приложение введите номер вашего мобильного телефона
        </Text>
      </View>
      <Pressable style={{
        paddingTop: '15%',
      }}
      >
        <Text
          style={styles.enter_btn}
          onPress={() => navigation.navigate('EnterSmsScreen')}
        >Войти
        </Text>
      </Pressable>
      <Text
        style={styles.privacy_police}
        // onPress={() => Linking.openURL('https://devby.io/pages/agreement')}
        onPress={ModalFun}
      >
        Пользовательское соглашение
      </Text>
    </View>
  );
}
