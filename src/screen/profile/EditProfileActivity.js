import React from 'react';
import {View, Text, StyleSheet, TextInput, Platform} from 'react-native';
// import TextInput from '../../components/TextInput';
import Buttom from '../../components/Buttom';

import IconProvider from '../../components/IconProvider';
import {Avatar, CheckBox} from 'react-native-elements';
export default class EditProfileActivity extends React.Component {
  _onPressBack = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <IconProvider
            name={'close'}
            size={25}
            color="#FF6969"
            onPress={this._onPressBack}
          />
        </View>
        <Text style={styles.txtTitel}>Edit Profile</Text>
        <View style={styles.ViewBody}>
          <Avatar
            size="large"
            rounded
            showEditButton
            source={{
              uri:
                'https://i.pinimg.com/564x/13/4e/79/134e79946a7c730fc286b7c90bae0d45.jpg',
            }}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            placeholder="Full Names"
            onChangeText={text => this.setState({text})}
          />
          <TextInput
            style={styles.input}
            placeholder="BirtDay"
            onChangeText={text => this.setState({text})}
          />
          <View style={styles.birdDay}>
            <IconProvider name={'calendar-range'} size={20} />
            <Text style={styles.txtDate} onPress={this.datepicker}>
              18/10/2019
            </Text>
          </View>
          <TextInput
            placeholder="Phone Number"
            style={styles.input}
            textContentType="telephoneNumber"
            onChangeText={text => this.setState({text})}
          />
          <TextInput
            placeholder="Address"
            style={styles.input}
            onChangeText={text => this.setState({text})}
            keyboardType="visible-password"
          />
          <Buttom style={styles.btnCommit} secondary rounded caption="Commit" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHeader: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
  },
  txtTitel: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: 30,
  },
  ViewBody: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  viewCheckbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  input: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 12,
    padding: 10,
  },
  viewInput: {
    marginTop: 20,
  },
  btnCommit: {
    width: 200,
    marginTop: 20,
    alignSelf: 'center',
    elevation: 2,
  },
  datePicker: {
    width: 200,
  },
  birdDay: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 1,
    height: 45,
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 20,
  },
  txtDate: {
    marginLeft: 10,
  },
});
