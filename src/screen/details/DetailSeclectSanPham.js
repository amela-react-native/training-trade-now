import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import HeaderItem from '../../components/HeaderItem';
import ListSelectItem from '../listItem/ListSelectItem';

export default function DetailSelectSanPham(props) {
  function goToBack() {
    props.navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <HeaderItem
        iconLeft={'arrow-left'}
        onPress={goToBack}
        title={'My Stuff'}
      />
      <ListSelectItem pr={props} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
