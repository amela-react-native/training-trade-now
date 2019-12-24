import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import IconProvider from '../../components/IconProvider';
import ItemSettings from '../../components/ItemSettings';

export default function SettingActivity(props) {
  function onPressBack() {
    props.navigation.navigate('More');
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <IconProvider
          onPress={onPressBack}
          style={styles.iconBack}
          name={'keyboard-backspace'}
          size={30}
        />
      </View>
      <Text style={styles.txtTitle}> Settings</Text>
      <View style={styles.viewBody}>
        <ItemSettings
          iconLeft={'flag-plus'}
          title={'Shipping Address'}
          iconRight={'chevron-right'}
        />
        <ItemSettings
          iconLeft={'account-card-details-outline'}
          title={'Payment Method'}
          iconRight={'chevron-right'}
        />
        <ItemSettings
          iconLeft={'cash-100'}
          title={'Currency'}
          iconRight={'chevron-right'}
        />
        <ItemSettings
          iconLeft={'translate'}
          title={'Language'}
          iconRight={'chevron-right'}
        />
      </View>
      <View style={styles.viewBody}>
        <ItemSettings
          iconLeft={'bell-outline'}
          title={'Notification Settings'}
          iconRight={'chevron-right'}
        />
        <ItemSettings
          iconLeft={'shield-cross-outline'}
          title={'Privacy Policy'}
          iconRight={'chevron-right'}
        />
        <ItemSettings
          iconLeft={'cellphone-message'}
          title={'Frequently Asked Questions'}
          iconRight={'chevron-right'}
        />
        <ItemSettings
          iconLeft={'information-outline'}
          title={'Legal Information'}
          iconRight={'chevron-right'}
        />
      </View>
      <Text style={styles.txtLogOut}>LOG OUT</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
  },
  viewHeader: {
    height: 50,
    justifyContent: 'center',
  },
  iconBack: {
    backgroundColor: '#B8BEC8',
    height: 30,
    width: 30,
    marginLeft: 20,
    borderRadius: 30,
  },
  txtTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  viewBody: {
    height: 200,
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  txtLogOut: {
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#FF6969',
  },
});
