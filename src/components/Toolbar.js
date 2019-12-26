import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Toolbar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Icon style={styles.message} name="comment" size={24} />
        <Icon style={styles.notification} name="bell" size={24} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: '#FFF',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 20,
  },
  message: {
    padding: 5,
  },
  notification: {
    padding: 5,
  },
});
