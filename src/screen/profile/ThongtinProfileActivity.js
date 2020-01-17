import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import IconProvider from '../../components/IconProvider';
import {Avatar} from 'react-native-elements';

export default function ThongtinProfileActivity(props) {
  function onPresstoFollower() {
    props.pr.navigation.navigate('Followers');
  }
  function onPresstoFollowing() {
    props.pr.navigation.navigate('Following');
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewBia}>
        <Image
          style={styles.imgBia}
          source={{
            uri:
              'https://i.pinimg.com/564x/7f/6a/15/7f6a15ea5fb7f5cdee12cac8b0103aab.jpg',
          }}
        />
      </View>
      <View style={styles.viewBody}>
        <View style={styles.viewBodyHeader}>
          <Text style={styles.txtNurse}>Nurse</Text>
          <Avatar
            rounded
            size="large"
            containerStyle={styles.AvatarView}
            source={{
              uri:
                'https://i.pinimg.com/564x/b8/2f/15/b82f15bd600f94a83e4f69a4cf188603.jpg',
            }}
          />
          <IconProvider
            name={'heart-multiple-outline'}
            size={24}
            color={'#990000'}
            style={styles.iconHeart}
          />
        </View>
        <View style={styles.viewText}>
          <Text style={styles.txtUserName}> Trần Tiến Long</Text>
          <Text style={styles.txtAddress}>
            Đội 10, thôn Nghĩa,Xuy Xá, Mỹ Đức,Hà Tây
          </Text>
        </View>
        <View style={styles.viewFollwor}>
          <Text style={styles.txtFollows}> 80 Posts</Text>
          <Text onPress={onPresstoFollower} style={styles.txtFollow}>
            123 Followers
          </Text>
          <Text onPress={onPresstoFollowing} style={styles.txtFollow}>
            200 Following
          </Text>
        </View>
        <View style={styles.view} />
        <Text style={styles.textAbout}> About</Text>
        <View style={styles.viewAbout}>
          <IconProvider name={'phone'} size={24} color={'green'} />
          <Text style={styles.txtAbout}>+84968829007</Text>
        </View>
        <View style={styles.viewAbout}>
          <IconProvider name={'phone'} size={24} color={'green'} />
          <Text style={styles.txtAbout}>+84968829007</Text>
        </View>
        <View style={styles.viewAbout}>
          <IconProvider name={'phone'} size={24} color={'green'} />
          <Text style={styles.txtAbout}>+84968829007</Text>
        </View>
        <View style={styles.viewAbout}>
          <IconProvider name={'phone'} size={24} color={'green'} />
          <Text style={styles.txtAbout}>+84968829007</Text>
        </View>
        <View style={styles.viewAbout}>
          <IconProvider name={'phone'} size={24} color={'green'} />
          <Text style={styles.txtAbout}>+84968829007</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'gray',
  },
  viewBody: {
    flex: 0.9,
    backgroundColor: 'white',
    marginBottom: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: '-80%',
    opacity: 0.9,
  },
  viewBodyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  AvatarView: {
    marginTop: -35,
    marginRight: 15,
  },
  txtNurse: {
    marginTop: 5,
    backgroundColor: 'white',
    padding: 5,
    height: 30,
    borderRadius: 5,
  },
  iconHeart: {
    marginTop: 5,
  },
  txtUserName: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
  viewText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  viewFollwor: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
  },
  txtFollow: {
    borderLeftWidth: 1,
    fontSize: 15,
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  view: {
    borderBottomWidth: 1,
    marginTop: 20,
    marginHorizontal: 30,
  },
  textAbout: {
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 15,
  },
  viewAbout: {
    marginLeft: 20,
    marginTop: 30,
    flexDirection: 'row',
  },
  txtAbout: {
    fontWeight: 'bold',
    marginLeft: 20,
  },
  imgBia: {
    width: '100%',
    height: '70%',
    // marginTop: '-20%',
  },
  viewBia: {
    height: '60%',
    marginTop: -50,
  },
  txtAddress: {
    marginTop: 10,
    fontSize: 12,
  },
});
