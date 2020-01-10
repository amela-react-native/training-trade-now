import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import HeaderItem from '../../components/HeaderItem';
export default function DetailMessage(props) {
  function goToBack() {
    props.navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <HeaderItem iconLeft={'arrow-left'} txtName={'Long'} onPress={goToBack} />
      <Text>fnkada</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
