import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FastImage from 'react-native-fast-image';

export default class NotificationActivity extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> NotificationActivity</Text>
        <FastImage
          style={{width: 200, height: 200}}
          source={{
            uri:
              'https://images.pexels.com/photos/3022413/pexels-photo-3022413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            headers: {Authorization: 'someToken'},
            priority: FastImage.PriorityNormal,
          }}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/3022413/pexels-photo-3022413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 ',
          }}
          style={styles.image}
        />
        <FastImage
          style={{width: 200, height: 200}}
          source={{
            uri: 'https://media.giphy.com/media/GEsoqZDGVoisw/giphy.gif',
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
            resizeMode: FastImage.resizeMode.cove,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
});
