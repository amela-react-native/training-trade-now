import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import ListItemMyStuff from '../listItem/ListItemMyStuff';
import IconProvider from '../../components/IconProvider';

export default function MyStuffActivity(props) {
  function onPressAlert() {
    Alert.alert(
      'Trade Now',
      'Bạn có muốn tải lên không ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => props.navigation.navigate('Category')},
      ],
      {cancelable: false},
    );
  }
  return (
    <View style={styles.container}>
      <ListItemMyStuff pr={props} />
      <View style={styles.viewFloat}>
        <View style={styles.viewfloat}>
          <IconProvider
            name={'plus'}
            size={30}
            color={'white'}
            onPress={onPressAlert}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewfloat: {
    width: 40,
    height: 40,
    backgroundColor: '#5773FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewFloat: {
    margin: 15,
    alignSelf: 'flex-end',
    position: 'absolute',
    marginBottom: 30,
    height: 60,
    width: 60,
  },
});
