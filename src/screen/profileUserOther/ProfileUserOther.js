import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import HeaderItem from '../../components/HeaderItem';
import IconProvider from '../../components/IconProvider';
import GridViewUserOrther from '../listItem/GridViewUserOrther';

function ProfileUserOther(props) {
  function onBackTo() {
    props.navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <HeaderItem iconLeft={'arrow-left'} onPress={onBackTo} />
      <View style={styles.body}>
        <Image
          source={{
            uri:
              'https://i.pinimg.com/564x/b8/2f/15/b82f15bd600f94a83e4f69a4cf188603.jpg',
          }}
          style={styles.avatar}
        />
        <View style={styles.headerbody}>
          <Text style={styles.txtUsername}>Trần Tiến Long</Text>
          <Text style={styles.txtEmail}>Hà Nội</Text>
          <View style={styles.viewBtn}>
            <TouchableOpacity style={styles.editProfile}>
              <Text style={styles.txtEdit}>Follow</Text>
            </TouchableOpacity>
            <View style={styles.iconSend}>
              <IconProvider name={'send'} size={25} color={'white'} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={[styles.text, {fontSize: 24}]}>483</Text>
          <Text style={[styles.text, styles.subText]}>Posts</Text>
        </View>
        <View
          style={[
            styles.statsBox,
            {borderColor: '#DFD8C8', borderLeftWidth: 1, borderRightWidth: 1},
          ]}>
          <Text style={[styles.text, {fontSize: 24}]}>45,844</Text>
          <Text style={[styles.text, styles.subText]}>Followers</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={[styles.text, {fontSize: 24}]}>302</Text>
          <Text style={[styles.text, styles.subText]}>Following</Text>
        </View>
      </View>
      <GridViewUserOrther pr={props} />
    </View>
  );
}
export default ProfileUserOther;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerbody: {
    marginLeft: 20,
  },
  editProfile: {
    width: 100,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#665EFF',
    borderColor: '#665EFF',
  },
  txtEdit: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    color: 'white',
  },
  txtUsername: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  txtEmail: {
    fontSize: 12,
    marginTop: 10,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  iconSend: {
    backgroundColor: '#3ACCE1',
    marginLeft: 10,
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: 50,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
});
