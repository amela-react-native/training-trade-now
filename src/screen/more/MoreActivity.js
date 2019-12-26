import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

import IconProvider from '../../components/IconProvider';
import ListSanpham from './ListMenuSanPham';
export default function MoreActivity(props) {
  function onPressBack() {
    props.navigation.navigate('Setings');
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <View style={styles.iconheader}>
          <IconProvider
            onPress={onPressBack}
            name={'settings-outline'}
            size={24}
            color={'white'}
          />
        </View>
      </View>
      <Text style={styles.txtTitle}> More</Text>
      <ListSanpham />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  viewHeader: {
    height: 50,
    width: '100%',
  },
  iconheader: {
    backgroundColor: '#FFAF52',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 10,
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
