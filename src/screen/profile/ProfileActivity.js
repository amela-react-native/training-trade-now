import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import Modal from 'react-native-modalbox';

import {Toolbar} from '../../components';
import FormProfile from '../../components/form/FormProfile';
import Informations from '../../components/Informations';
import ThongtinProfile from './ThongtinProfileActivity';

export default class ProfileActivity extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }
  _onPressEdit = () => {
    this.props.navigation.navigate('EditProfile');
  };
  showModal = item => {
    try {
      this.modal1.open();
      this.setState({author: item.author});
    } catch (error) {
      console.log('ajdhjlfdfja');
    }
  };
  commentshow = item => {
    if (item.author === item.id) {
      this.showModal();
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Toolbar style={styles.toolbar} />
        <ScrollView style={styles.viewAllBody}>
          <View style={styles.body}>
            <Avatar
              rounded
              size="large"
              source={{
                uri:
                  'https://i.pinimg.com/564x/b8/2f/15/b82f15bd600f94a83e4f69a4cf188603.jpg',
              }}
            />
            <View style={styles.headerbody}>
              <Text style={styles.txtUsername} onPress={this.commentshow}>
                Trần Tiến Long
              </Text>
              <Text style={styles.txtEmail}>longttph05657@fpt.edu.vn</Text>
              <TouchableOpacity
                style={styles.editProfile}
                onPress={this._onPressEdit}>
                <Text style={styles.txtEdit}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewInfor}>
            <Text style={styles.txtTitle}>Infomations</Text>
            <View style={styles.viewChidlInfo}>
              <Informations title={'Sản phẩm tải lên'} number={'30'} />
              <Informations title={'Trao đổi thành công'} number={'30'} />
              <Informations title={'Danh sách đã lưu'} number={'30'} />
              <Informations title={'Đánh giá về tôi'} number={'30'} />
            </View>
          </View>
          <View style={styles.viewbody}>
            <FormProfile
              title="Invite Friends"
              iconLeft={'email-mark-as-unread'}
              iconRight={'chevron-right'}
            />
            <FormProfile
              title="Customer Support"
              iconLeft={'headphones'}
              iconRight={'chevron-right'}
            />
            <FormProfile
              title="Rate Our App"
              iconLeft={'star-circle-outline'}
              iconRight={'chevron-right'}
            />
            <FormProfile
              title="Make a Suggestion"
              iconLeft={'square-edit-outline'}
              iconRight={'chevron-right'}
            />
          </View>
          <View style={styles.viewbodyTow}>
            <FormProfile
              title="Settings"
              iconLeft={'settings-outline'}
              iconRight={'chevron-right'}
            />
          </View>
        </ScrollView>
        <Modal
          style={[styles.modal]}
          ref={ref => {
            this.modal1 = ref;
          }}
          isOpen={this.state.modal}
          keyboardTopOffset={0}
          coverScreen={true}
          backdropPressToClose={false}
          onClosed={() => this.setState({modal: false})}
          onOpened={() => this.setState({modal: true})}>
          <ThongtinProfile style={styles.swipe} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
  },
  toolbar: {
    position: 'relative',
  },
  body: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerbody: {
    marginLeft: 20,
  },
  editProfile: {
    width: 150,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
  },
  txtEdit: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    color: '#727C8E',
  },
  txtUsername: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  txtEmail: {
    fontSize: 12,
    marginTop: 10,
  },
  viewbody: {
    height: 250,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
    marginBottom: 5,
  },
  viewAllBody: {
    flex: 1,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    elevation: 5,
    marginBottom: 10,
  },
  swipe: {
    flex: 1,
    justifyContent: 'center',
  },
  viewbodyTow: {
    height: 50,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  viewChidlInfo: {
    height: 100,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  txtTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 20,
  }
});
