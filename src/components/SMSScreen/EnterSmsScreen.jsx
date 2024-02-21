import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { Text, Pressable, Linking, View, Image, TextInput, KeyboardAvoidingView, Platform, Modal, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/customStyles';
import { IMAGES } from '../../../assets/index';

import { ModalS } from '../ModalS';

export function EnterSmsScreen({ navigation }) {
  const { SMS_PAGE_PICTURE } = IMAGES;

  const [modal, setModal] = useState(false);

  const modalfun = () => {
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

      {/* <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    > */}
      <Text
        style={styles.header_title}
      >
        Подтвердите номер
      </Text>
      <Image style={styles.image_sms} source={SMS_PAGE_PICTURE} />
      {/* <StatusBar style="auto" /> */}
      <View>
        <TextInput
          placeholder="Код из смс"
          style={styles.test_input}
        />
        <Text
          style={styles.text_field_description}
        >
          Вы можете получить новый код из смс через 60 сек.
        </Text>
        <Text
          style={styles.text_field_description_sms}
        >
          Получить новый код.
        </Text>
      </View>
      <Pressable style={{
        paddingTop: '15%',
      }}
      >
        <Text
          style={styles.enter_btn}
          onPress={() => navigation.navigate('Dashbord')}
        >Войти
        </Text>
      </Pressable>
      <Text
        style={styles.privacy_police}
        // onPress={() => Linking.openURL('https://devby.io/pages/agreement')}
        onPress={modalfun}
      >
        Пользовательское соглашение
      </Text>
      {/* </KeyboardAvoidingView> */}
    </View>
  );
}
