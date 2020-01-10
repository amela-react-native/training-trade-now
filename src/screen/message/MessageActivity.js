import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import HeaderItem from '../../components/HeaderItem';
import ListItemMessage from './../listItem/ListItemMessage';
export default function MessageActivity(props) {
  function gotoBack() {
    props.navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <HeaderItem
        img={
          'https://i.pinimg.com/564x/81/87/84/818784a9d96f25ddba3451046d9f86d4.jpg'
        }
        txtName={'Chat'}
        iconRight={'close'}
        color={'red'}
        onPressThree={gotoBack}
      />
      <ScrollView>
        <SearchBar
          platform="android"
          inputContainerStyle={styles.inputSearchbar}
          placeholder="Type Here ..."
        />
        <ListItemMessage pr={props} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
  },
  inputSearchbar: {
    backgroundColor: '#D2D7DF',
    borderRadius: 30,
    width: '85%',
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
