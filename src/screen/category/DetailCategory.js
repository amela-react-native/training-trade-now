import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderItem from '../../components/HeaderItem';

function DetailCategory(props) {
  function goBack() {
    props.navigation.navigate('Category');
  }
  function goAddCategory() {
    props.navigation.navigate('AddCategory');
  }
  return (
    <View style={styles.container}>
      <HeaderItem iconLeft={'arrow-left'} title={'Thể Loại'} onPress={goBack} />
      <Text onPress={goAddCategory}>Add</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
});

export default DetailCategory;
