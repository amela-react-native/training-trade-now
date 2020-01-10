import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Toolbar from '../../components/Toolbar';
import SlideShowADS from './SlideShowADS';
import ListTopTrader from './ListTopTrader';
import ListSanpham from '../container/ListSanpham';
export default function HomeActivity(props) {
  function onPressMessage() {
    props.navigation.navigate('Message');
  }
  function onPressNotification() {
    props.navigation.navigate('Notification');
  }
  return (
    <View style={styles.container}>
      <Toolbar
        title={'Hello Tiến Long'}
        avatar={{
          uri:
            'https://i.pinimg.com/564x/bb/54/a3/bb54a3a83170f1f043768b1862365319.jpg',
        }}
        onPress={onPressMessage}
        onPressTo={onPressNotification}
      />
      <Text style={styles.txtTitle}> Giới Thiệu</Text>
      <View style={styles.viewSlide}>
        <SlideShowADS pr={props} />
      </View>
      <Text style={styles.txtTitle}>Top Trader</Text>
      <View style={styles.viewTopTrader}>
        <ListTopTrader prs={props} />
      </View>
      <View style={styles.viewList}>
        <Text style={styles.txtSeeAll}>See All >></Text>
        <ListSanpham pr={props} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 20,
  },
  viewSlide: {
    height: 200,
  },
  viewTopTrader: {
    height: 60,
  },
  viewList: {
    marginTop: 10,
  },
  txtSeeAll: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
});
