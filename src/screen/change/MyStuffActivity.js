import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MyStuffActivity(props) {
  return (
    <View style={styles.container}>
      <Text> MystuffActivity</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
