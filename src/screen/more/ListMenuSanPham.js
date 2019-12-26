import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import MenuItem from './MenuItem';

export default function ListMenuSanpham(props) {
  return (
    <ScrollView style={styles.viewBody}>
      {/* View Menu Book  */}
      <MenuItem
        iconRight={'chevron-right'}
        title={'Sách'}
        colors={['#FFAE4E', '#FF7676', '#FF7676']}
        iconLeft={'book-open-variant'}
      />
      {/* Thời trang */}
      <MenuItem
        iconRight={'chevron-right'}
        title={'Thời trang'}
        colors={['#4EFFF8', '#76BAFF', '#76BAFF']}
        iconLeft={'tshirt-crew'}
      />
      {/* Giải trí */}
      <MenuItem
        iconRight={'chevron-right'}
        title={'Giải trí'}
        colors={['#9D9E9F', '#505862', '#505862']}
        iconLeft={'gamepad-variant'}
      />
      {/* Gia dụng */}
      <MenuItem
        iconRight={'chevron-right'}
        title={'Gia dụng'}
        colors={['#B4FF4E', '#2FC145', '#2FC145']}
        iconLeft={'power-plug'}
      />
      {/* Xe cộ */}
      <MenuItem
        iconRight={'chevron-right'}
        title={'Xe cộ'}
        colors={['#9D9E9F', '#505862', '#505862']}
        iconLeft={'motorbike'}
      />
      {/* Nội thất */}
      <MenuItem
        iconRight={'chevron-right'}
        title={'Nội thất'}
        colors={['#FFF84E', '#E6B15C', '#E6B15C']}
        iconLeft={'sofa'}
      />
      {/* Điện tử */}
      <MenuItem
        iconRight={'chevron-right'}
        title={'Điện tử'}
        colors={['#D5A3FF', '#77A5F8', '#77A5F8']}
        iconLeft={'television-classic'}
      />
      {/* Khác */}
      <MenuItem
        iconRight={'chevron-right'}
        title={'Khác'}
        colors={['#9D9E9F', '#505862', '#505862']}
        iconLeft={'file-tree'}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  viewIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '70%',
    alignItems: 'center',
    borderRadius: 12,
  },
  viewChild: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    marginHorizontal: 30,
    marginTop: 20,
  },
  viewIconMenu: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconMenu: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtMenu: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  viewIconNext: {
    backgroundColor: 'gray',
    marginRight: 10,
    borderRadius: 20,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
