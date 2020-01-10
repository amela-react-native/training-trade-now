import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Platform,
  Alert,
} from 'react-native';
import IconProvider from '../../components/IconProvider';
import HeaderItem from '../../components/HeaderItem';

export default function DatailListSanPham(props) {
  function dialCall({number}) {
    let numberPhone = '123456';
    if (Platform.OS === 'android') {
      numberPhone = `tel:${123546}`;
    } else {
      numberPhone = `telprompt:${12345656}`;
    }
    Linking.openURL(numberPhone);
  }
  function goBacks() {
    props.navigation.goBack();
    console.log(props.navigation);
  }
  function onPressToProfile() {
    props.navigation.navigate('ProfileUserOther');
  }
  function onPressAlert() {
    Alert.alert(
      'Trade Now',
      'Bạn có muốn Trade không ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => props.navigation.navigate('DetailSelectSanPham'),
        },
      ],
      {cancelable: false},
    );
  }
  const navigationParams = props.navigation.state.params;
  return (
    <View style={styles.containerScroll}>
      <HeaderItem
        iconLeft={'arrow-left'}
        title={'Info stuff'}
        onPress={goBacks}
      />
      <ScrollView style={styles.container}>
        <View style={styles.viewHeader}>
          <Image
            style={styles.img}
            source={{
              uri: navigationParams.url,
            }}
          />
        </View>
        <View style={styles.viewTitle}>
          <Text numberOfLines={1} style={styles.txtTitle}>
            {navigationParams.title}
          </Text>
          <Text style={styles.txtNews}>Độ mới: 98%</Text>
          <View style={styles.viewChildTitle}>
            <Text style={styles.txtNhuCau}>Nhu cầu: Smartphone</Text>
            <Text> /</Text>
            <Text style={styles.txtGia}> 9.000.000 VNĐ</Text>
          </View>
        </View>
        <View style={styles.viewInfor}>
          <TouchableOpacity onPress={onPressToProfile}>
            <Image
              style={styles.imgAvatar}
              source={{
                uri:
                  'https://i.pinimg.com/564x/c6/e1/9f/c6e19fa5281b6844ae35bea4fe8e9abb.jpg',
              }}
            />
          </TouchableOpacity>
          <View style={styles.viewtxtInfor}>
            <Text style={styles.txtUserName}>{navigationParams.author}</Text>
            <Text style={styles.txtAddress}>ad</Text>
          </View>
          <TouchableOpacity style={styles.btnFollow}>
            <Text style={styles.txtFollow}> Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewChitiet}>
          <Text style={styles.txtTitleChitiet}>Chi Tiết</Text>
          <Text style={styles.txtChitiet}>{navigationParams.content}</Text>
        </View>
      </ScrollView>
      <View style={styles.viewCall}>
        <TouchableOpacity style={styles.iconCall} onPress={onPressAlert}>
          <IconProvider name={'swap-vertical'} size={30} color={'white'} />
          <Text style={styles.txtNameIcon}>Trader</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCall} onPress={dialCall}>
          <IconProvider name={'phone'} size={30} color={'white'} />
          <Text style={styles.txtNameIcon}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCall}>
          <IconProvider name={'facebook-messenger'} size={30} color={'white'} />
          <Text style={styles.txtNameIcon}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    backgroundColor: '#E3E3E3',
  },
  container: {
    // backgroundColor: 'red',
    height: '100%',
  },
  viewHeader: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  img: {
    width: '90%',
    height: 200,
  },
  viewTitle: {
    height: 100,
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    padding: 10,
  },
  viewInfor: {
    marginTop: 10,
    height: 80,
    backgroundColor: 'white',
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewCall: {
    height: 80,
    backgroundColor: 'white',
    alignContent: 'flex-end',
    position: 'relative',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewChildTitle: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  txtTitle: {
    fontSize: 18,
  },
  txtNews: {
    color: '#109F3A',
    marginLeft: 10,
  },
  txtNhuCau: {
    color: '#818181',
  },
  txtGia: {
    color: '#1A1919',
    fontWeight: 'bold',
  },
  imgAvatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  viewtxtInfor: {
    marginLeft: -50,
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  txtUserName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  txtAddress: {
    fontSize: 12,
    fontWeight: '500',
  },
  txtFollow: {
    color: '#1070A7',
    fontWeight: 'bold',
  },
  btnFollow: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1070A7',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  viewChitiet: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
  },
  txtTitleChitiet: {
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'italic',
  },
  txtChitiet: {
    marginTop: 10,
  },
  iconCall: {
    backgroundColor: '#FF4E00',
    width: 100,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtNameIcon: {
    color: 'white',
    fontWeight: 'bold',
  },
});
