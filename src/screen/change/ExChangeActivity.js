import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import TabBarNavigation from '../../navigation/TabBarNavigation';
import IconProvider from '../../components/IconProvider';
export default function ExChangeActivity(props) {
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
      <TabBarNavigation />
      <View style={styles.viewfloat}>
        <IconProvider
          name={'plus'}
          size={30}
          color={'white'}
          onPress={onPressAlert}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewfloat: {
    width: 40,
    height: 40,
    backgroundColor: '#5773FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: 15,
  },
});
