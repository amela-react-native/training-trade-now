import React from 'react';
import {View, Text, StyleSheet, TextInput, Platform} from 'react-native';
// import TextInput from '../../components/TextInput';
import Buttom from '../../components/Buttom';

import IconProvider from '../../components/IconProvider';
import {Avatar, CheckBox} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker';
export default class EditProfileActivity extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: '',
  //     date: new Date('2020-06-12T14:42:42'),
  //     mode: 'date',
  //     show: false,
  //   };
  // }
  // setDate = (event, date) => {
  //   date = date || this.state.date;

  //   this.setState({
  //     show: Platform.OS === 'ios' ? true : false,
  //     date,
  //   });
  // };

  // show = mode => {
  //   this.setState({
  //     show: true,
  //     mode,
  //   });
  // };

  // datepicker = () => {
  //   this.show('date');
  // };

  // timepicker = () => {
  //   this.show('time');
  // };
  _onPressBack = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    // const {show, date, mode} = this.state;
    // const options = {
    //   title: 'Select Avatar',
    //   customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    //   storageOptions: {
    //     skipBackup: true,
    //     path: 'images',
    //   },
    // };
    // ImagePicker.showImagePicker(options, response => {
    //   console.log('Response = ', response);
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     const source = {uri: response.uri};
    //     // You can also display the image using data:
    //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    //     this.setState({
    //       avatarSource: source,
    //     });
    //   }
    // });
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
          {/* {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              is24Hour={true}
              display="calendar"
              onChange={this.setDate}
            />
          )} */}
          <TextInput
            placeholder="Phone Number"
            style={styles.input}
            textContentType="telephoneNumber"
            onChangeText={text => this.setState({text})}
          />
          <TextInput
            placeholder="Address"
            style={styles.input}
            // textContentType="password"
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
