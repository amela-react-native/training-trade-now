import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  // CheckBox,
  // TextInput,
} from 'react-native';
import axios from 'axios';
import {Buttom} from '../../../components';
import {CheckBox} from 'react-native-elements';
import FormTextInput from '../../../components/FormTextInput';
import {connect} from 'react-redux';
import * as actions from './redux/actionAuth';
const LoginActivity = props => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState('');

  function onPressSignUp() {
    props.navigation.navigate('Register');
  }

  function login() {
    props.login(username, password).then(() => {
      if (props.err) {
        alert(props.err);
      } else {
        alert(props.userData.user.name + 'user successfully logged in');
      }
    });
  }

  function validateLogin() {
    const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (username === '' && password === '') {
      alert('Vui lòng nhập đầy đủ ký tự');
    } else if (!reg.test(username) === false) {
      alert('Email không đúng định dạng');
    } else {
      login();
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewHeader}>
        <ImageBackground
          style={styles.imageHeader}
          source={require('../../../../assets/image/background.png')}>
          <View style={styles.viewTxt}>
            <Text style={styles.txtWelcome}>Welcome Back,</Text>
            <Text style={styles.txtTileLogin}>Log In!</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <FormTextInput
          title={'Email'}
          placeholder="VD: abc@gmail.com"
          containerStyle={styles.input}
          value={username}
          onChangeText={username => setUserName(username)}
        />
        <FormTextInput
          title={'Password'}
          placeholder="Password"
          containerStyle={styles.input}
          value={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
          numberMaxLength={6}
        />
        <CheckBox
          containerStyle={styles.checkboxs}
          title="Remember me"
          checked={checked}
          onPress={() => setChecked({checked: !checked})}
        />
        <Buttom
          style={styles.btnLogin}
          large
          secondary
          rounded
          caption="Log In"
          onPress={validateLogin}
        />
      </View>
      <View style={styles.viewCreate}>
        <Text style={styles.txtCreat}>Don't have an account ?</Text>
        <Text onPress={onPressSignUp} style={styles.txtSig}>
          Sign up.
        </Text>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  isLoading: state.isLoading,
  userData: state.userData,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(actions.login({username, password})),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginActivity);

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
  input: {
    alignItems: 'center',
  },
  viewCreate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  txtSig: {
    color: '#5A81F7',
  },
  txtCreat: {
    marginRight: 10,
  },
});
