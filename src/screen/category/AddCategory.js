import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Alert,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import HeaderItem from '../../components/HeaderItem';
import IconProvider from '../../components/IconProvider';
import TextInputs from '../../components/TextInputs';
import ImagePicker from 'react-native-image-crop-picker';
import PERMISSIONS from 'react-native-permissions';

const AddCategory = ({image}) => {
  const [titles, setTitle] = useState('');
  const [news, setNews] = useState('');
  const [description, setDescription] = useState('');
  const [exchange, setExchange] = useState('');
  const [images, setImages] = useState(null);

  function goBack({props}) {
    props.navigation.goBack();
  }
  function checkValidate() {}

  async function checkPermissionPhotos() {
    await PERMISSIONS.request('photo');
    return PERMISSIONS.check('photo').then(response => {
      if (response === 'authorized') {
        return true;
      }
      if (response === 'denied') {
        if (Platform.OS === 'ios') {
          showRequestPermission('photo');
        }
        return false;
      }
      return true;
    });
  }

  function showRequestPermission(type) {
    Alert.alert(
      'Kumimasu',
      [
        {
          text: 'キャンセル',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: '設定',
          onPress: () => Linking.openURL('app-settings:'),
        },
      ],
      {cancelable: false},
    );
  }

  async function onSelectImage() {
    try {
      const res = await checkPermissionPhotos();
      if (res) {
        ImagePicker.openPicker({
          multiple: true,
          waitAnimationEnd: false,
          includeExif: true,
          forceJpg: true,
        })
          .then(images => {
            console.log(images);
            setImages(
              images.map(i => {
                console.log('received image', i);
                return {
                  uri: i.path,
                  width: i.width,
                  height: i.height,
                  mime: i.mime,
                  maxLength: 15,
                };
              }),
            );
          })
          .catch(e => alert(e));
      }
    } catch (e) {
      console.log(e);
    }
  }
  function renderImage(image) {
    return (
      <View style={styles.viewShowImage}>
        <Image style={styles.image} source={image} />
        <TouchableOpacity style={styles.viewIconClose}>
          <IconProvider style={styles.iconClose} name={'close'} size={20} />
        </TouchableOpacity>
      </View>
    );
  }
  function renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      console.log('test', image);
      return this.renderVideo(image);
    }

    return renderImage(image);
  }

  function getTotal(images) {
    var total = '';
    for (var i = 0; i < images.path.length; i++) {
      total = images.length;
    }
    return total;
  }
  return (
    <View style={styles.container}>
      <HeaderItem
        iconLeft={'arrow-left'}
        title={'Tạo bài viết'}
        onPress={goBack}
        titleRight={'Đăng'}
        onPressTo={checkValidate}
      />
      <View>
        <View style={styles.viewShow}>
          <View style={styles.viewCamera}>
            <IconProvider
              name={'camera-outline'}
              size={40}
              color={'white'}
              style={styles.camera}
              onPress={onSelectImage}
            />
            <Text style={styles.txtTotal}>{getTotal}0/15</Text>
          </View>
          <View style={styles.viewScrollview}>
            <ScrollView horizontal={true}>
              {images
                ? images.map(i => <View key={i.uri}>{renderAsset(i)}</View>)
                : null}
            </ScrollView>
          </View>
        </View>
        <View style={styles.viewBody}>
          <TextInputs
            maxLength={25}
            placeholder={'Tiêu đề (tối thiểu 5 ký tự)'}
            value={titles}
            onChangeText={titles => setTitle(titles)}
            numberMaxLength={5}
            numberOfLines={1}
          />
          <TextInputs
            style={styles.input}
            placeholder="Độ mới (VD: 98%)"
            maxLength={2}
            value={news}
            numberMaxLength={2}
            keyboardType={'number-pad'}
            onChangeText={news => setNews(news)}
          />
          <TextInputs
            style={styles.input}
            placeholder="Nhu cầu muốm đổi:"
            value={exchange}
            onChangeText={exchange => setExchange(exchange)}
            numberMaxLength={20}
            numberOfLines={1}
            maxLength={40}
          />
          <View style={styles.viewTara}>
            <TextInputs
              style={styles.inputTara}
              placeholder="Hãy nhập chi tiết các thông tin sản phẩm như  nhãn hiệu, màu sắc, kích cỡ ... (Tối thiểu 20 ký tự)"
              maxLength={500}
              editable
              numberOfLines={4}
              multiline={true}
              value={description}
              onChangeText={description => setDescription(description)}
              numberMaxLength={20}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  viewShow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    height: 120,
    marginTop: 20,
  },
  viewBody: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderTopWidth: 0.3,
    borderColor: '#E1DADA',
  },
  viewTara: {
    borderWidth: 0.3,
    borderRadius: 10,
    marginTop: 10,
  },
  inputTara: {
    height: 150,
    textAlign: 'left',
    marginHorizontal: 10,
  },
  viewCamera: {
    backgroundColor: 'gray',
    width: '25%',
    justifyContent: 'center',
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
  },
  viewScrollview: {
    width: '65%',
    marginLeft: 20,
    flexDirection: 'row',
    height: '100%',
  },
  camera: {
    alignSelf: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  viewIconClose: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginTop: -110,
    marginRight: -2,
  },
  viewShowImage: {
    flexDirection: 'column',
  },
  iconClose: {
    backgroundColor: 'gray',
    width: 24,
    height: 24,
    borderRadius: 12,
    padding: 1.5,
  },
  txtTotal: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default AddCategory;
