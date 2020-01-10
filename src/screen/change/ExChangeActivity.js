import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import TabBarNavigation from '../../navigation/TabBarNavigation';
export default function ExChangeActivity(props) {
  return (
    <View style={styles.container}>
      <TabBarNavigation styles={styles.viewTab} />
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
    alignContent: 'flex-end',
    margin: 15,
    position: 'absolute',
  },
  viewTab: {},
});
