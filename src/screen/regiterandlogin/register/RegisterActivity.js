import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {Buttom} from '../../../components';
import IconProvider from '../../../components/IconProvider';
import FormTextInput from '../../../components/FormTextInput';

export default function RegisterActivity(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [emailUserName, setEmailUserName] = useState('');

  function onPressSignUp() {
    props.navigation.navigate('Login');
  }

  function registerToSever() {
    axios
      .get('https://cuahangthucung.herokuapp.com/user/signup', {
        data: {
          username: username,
          password: password,
        },
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewHeader}>
        <ImageBackground
          style={styles.imageHeader}
          source={require('../../../../assets/image/background.png')}>
          <IconProvider
            onPress={onPressSignUp}
            style={styles.goback}
            name={'arrow-left'}
            size={30}
            color="#FFF"
          />
          <View style={styles.viewTxt}>
            <Text style={styles.txtWelcome}>Hello,</Text>
            <Text style={styles.txtTileLogin}>Sign Up</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <FormTextInput
          title={'userName'}
          placeholder="VD: Tiến A"
          containerStyle={styles.input}
          value={username}
          onChangeText={username => setUserName(username)}
        />
        <FormTextInput
          title={'Email'}
          placeholder="VD: abc@gmail.com"
          containerStyle={styles.input}
          value={emailUserName}
          onChangeText={emailUserName => setEmailUserName(emailUserName)}
        />
        <FormTextInput
          title={'Password'}
          placeholder="Password"
          containerStyle={styles.input}
          value={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
        />
        <Buttom
          style={styles.btnLogin}
          large
          secondary
          rounded
          caption="Sign Up"
          onPress={registerToSever}
        />
      </View>
      <View style={styles.viewCreate}>
        <Text style={styles.txtCreat}>Already have account?</Text>
        <Text onPress={onPressSignUp} style={styles.txtSig}>
          Sign In.
        </Text>
      </View>
    </ScrollView>
  );
}
const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 6,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHeader: {
    height: 189,
    width: '90%',
    flex: 0.2,
  },
  imageHeader: {
    height: '100%',
    width: '89%',
    marginTop: -10,
    marginLeft: -10,
    justifyContent: 'center',
  },
  body: {
    marginTop: 30,
    justifyContent: 'center',
    flex: 0.7,
  },
  txtWelcome: {
    color: 'white',
    fontSize: 20,
  },
  txtTileLogin: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  viewTxt: {
    alignSelf: 'flex-start',
    marginHorizontal: '10%',
    marginTop: 10,
  },
  btnLogin: {
    width: 200,
    marginTop: 20,
    alignSelf: 'center',
    elevation: 2,
  },
  checkboxs: {
    width: 150,
    backgroundColor: 'rgba(70, 0, 0, 0) ',
    marginLeft: 20,
  },
  input: {},
  viewCreate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 100,
  },
  txtSig: {
    color: '#5A81F7',
  },
  txtCreat: {
    marginRight: 10,
  },
  goback: {
    marginLeft: 20,
    marginTop: -30,
    backgroundColor: '#B8B8B8',
    width: 32,
    borderRadius: 20,
  },
});
