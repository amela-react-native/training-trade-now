import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import IconProvider from '../../components/IconProvider';
import Monent from 'react-moment';

function ListSanpham(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c68080ea2b7942d3b9b9c6acaa52bc47',
    )
      .then(res => res.json())
      .then(res => {
        setArticles([...articles, ...res.articles]);
        setLoading(false);
      });
  }, [articles]);

  function increaseValse() {
    console.log(likes);
    if (likes === 0) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  }

  return (
    <View style={styles.viewList}>
      <FlatList
        data={articles}
        // keyExtractor={item => item.description}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.viewImg}>
              <ImageBackground
                style={styles.img}
                source={{uri: item.urlToImage}}
                imageStyle={styles.imageBackground}>
                <TouchableOpacity onPress={increaseValse}>
                  <IconProvider
                    name={'heart-outline'}
                    size={30}
                    color={'white'}
                    style={styles.iconHeart}
                  />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View style={styles.viewListText}>
              <TouchableOpacity
                onPress={() => {
                  props.pr.navigation.navigate('DetailListSanPham', {
                    title: item.title,
                    url: item.urlToImage,
                    content: item.content,
                    publishedAt: item.publishedAt,
                    author: item.author,
                    description: item.description,
                  });
                }}>
                <Text numberOfLines={1} style={styles.txtTitle}>
                  {item.title}
                </Text>
              </TouchableOpacity>
              <View style={styles.viewAddress}>
                <Text style={styles.txtAddress}>Hoàng Mai -</Text>
                <Monent element={Text} fromNow style={styles.txtAddress}>
                  {item.publishedAt}
                </Monent>
              </View>
              <Text style={styles.txtNhuCau}> Nhu cầu: </Text>
              <Text style={styles.txtGia}>9.000.000 VND</Text>
              <View style={styles.viewHeart}>
                <IconProvider name={'heart'} size={20} color={'#C40304'} />
                <Text>{likes}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default ListSanpham;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 20,
    width: '90%',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderRadius: 10,
  },
  img: {
    height: '90%',
    width: 150,
    marginHorizontal: 10,
  },
  viewImg: {
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
  },
  viewList: {
    justifyContent: 'center',
  },
  viewListText: {
    // backgroundColor: 'red',
    width: '50%',
    justifyContent: 'space-evenly',
  },
  txtTitle: {
    textAlign: 'left',
    fontSize: 14,
    marginRight: 20,
    fontWeight: 'bold',
  },
  txtAddress: {
    fontSize: 12,
  },
  txtNhuCau: {
    fontSize: 12,
  },
  txtGia: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  viewHeart: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  imageBackground: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 5,
  },
  iconHeart: {
    alignSelf: 'flex-end',
    margin: 5,
  },
  viewAddress: {
    flexDirection: 'row',
  },
});
