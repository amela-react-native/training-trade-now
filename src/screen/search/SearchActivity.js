import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Toolbar from '../../components/Toolbar';
import {SearchBar} from 'react-native-elements';

export default function SearchActivity(props) {
  return (
    <View style={styles.container}>
      <Toolbar />
      <Text style={styles.txtTitle}> Search</Text>
      <SearchBar
        platform="android"
        inputContainerStyle={styles.inputSearchbar}
        placeholder="Type Here ..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: 'white',
  },
  inputSearchbar: {
    backgroundColor: '#D2D7DF',
    borderRadius: 30,
    width: '85%',
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#E83F3F',
    marginLeft: 10,
  },
});
