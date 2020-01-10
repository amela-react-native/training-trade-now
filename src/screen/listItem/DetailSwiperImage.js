import React, {useState, useEffect} from 'react';
import {View, Image, ViewBase, StyleSheet, Text} from 'react-native';
import HeaderItem from '../../components/HeaderItem';
import SwipeRender from 'react-native-swipe-render';
export default function DetailSwiperImage(props) {
  const [link, setLink] = useState('');
  function goBacks() {
    props.navigation.goBack();
  }
  function swiper(index) {
    const url = props.navigation.getParam('url', 'NO-NAME');
    setLink({link: url[index].urlToImage});
  }
  const url = props.navigation.getParam('url', 'NO-NAME');
  const idex = props.navigation.getParam('index', null);
  return (
    <View style={styles.container}>
      <HeaderItem iconLeft={'arrow-left'} onPress={goBacks} />
      <SwipeRender
        data={url}
        renderItem={({item, index}) => {
          <View key={'SwipeRender-slide#' + idex} style={styles.viewImg}>
            <Image
              style={styles.img}
              source={{uri: item.urlToImage}}
              resizeMode="contain"
            />
          </View>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  viewImg: {
    width: '100%',
    height: '100%',
  },
});
