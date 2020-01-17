import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import HeaderItem from '../../components/HeaderItem';
import {GiftedChat} from 'react-native-gifted-chat';
import IconProvider from '../../components/IconProvider';

export default function DetailMessage(props) {
  const [modalVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);

  const onSend = (newMesesager = []) =>
    setMessages(GiftedChat.append(messages, newMesesager));

  function goToBack() {
    props.navigation.navigate('AddCategory');
  }

  function setModalVisible(visible = false) {
    setIsVisible({modalVisible: visible});
  }
  function onActionspress() {
    const options = ['Choose From Libary', 'Send Location', 'Cancle'];
    const cancelButtonIndex = options.length - 1;
    this.context.actionSheet().showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            this.setModalVisible(true);
            break;
          case 1:
            navigator.geolocation.getCurrentPosition(
              position => {
                this.props.onSend({
                  location: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                  },
                });
              },
              error => alert(error.message),
              {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
            );
            break;
          default:
        }
      },
    );
  }

  function renderIcon() {
    if (props.icon) {
      return props.icon();
    }
    return (
      <View style={styles.viewIcon}>
        <IconProvider name={'plus'} size={30} color={'black'} />
      </View>
    );
  }
  // useEffect(() => {
  //   setMessages({
  //     messages: [
  //       {
  //         _id: 1,
  //         text: 'Hello developer',
  //         createdAt: new Date(),
  //         user: {
  //           _id: 2,
  //           name: 'React Native',
  //           avatar: 'https://placeimg.com/140/140/any',
  //         },
  //       },
  //     ],
  //   });
  // }, []);
  return (
    <View style={styles.container}>
      <HeaderItem
        iconLeft={'arrow-left'}
        txtName={'Tiến Long'}
        onPress={goToBack}
      />
      <TouchableOpacity>{renderIcon}</TouchableOpacity>
      <GiftedChat
        {...{messages, onSend}}
        user={{
          _id: 1,
        }}
        alwaysShowSend
        renderActions={renderIcon}
        textInputStyle={styles.giftedChat}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewIcon: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginBottom: 10,
  },
  // giftedChat: {
  //   borderRadius: 20,
  //   marginHorizontal: 20,
  // },
});
