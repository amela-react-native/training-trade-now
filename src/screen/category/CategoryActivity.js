import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderItem from '../../components/HeaderItem';
import ListMenuSanPham from '../more/ListMenuSanPham';

function CategoryActivity(props) {
  function goBack() {
    props.navigation.navigate('Trade');
  }
  function handleItemOnPress() {
    props.navigation.navigate('DetailCategory');
  }

  return (
    <View style={styles.container}>
      <HeaderItem iconLeft={'arrow-left'} title={'Thể Loại'} onPress={goBack} />
      <ListMenuSanPham onPress={handleItemOnPress} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
});

export default CategoryActivity;
