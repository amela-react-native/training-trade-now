import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import IconProvider from '../IconProvider';
interface Props {
  onPress?(): any,
  iconLeft: string,
  iconRight: string,
  title: string,
}

export default function FormProfile({ onPress, iconLeft, iconRight, title }: Props) {

  return (
    <View style={styles.viewItem}>
      <IconProvider style={styles.viewiconLeft} name={iconLeft} size={24} />
      <Text style={styles.txtTitle}>{title}</Text>
      <View style={styles.viewiconRight}>
        <IconProvider name={iconRight} onPress={()=> onPress && onPress()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewItem: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
    height: 45,
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderBottomColor: '#A2A9B5',
  },
  viewiconRight: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
  },
  viewiconLeft: {
    justifyContent: 'center',
    alignSelf: 'center',
  }
})