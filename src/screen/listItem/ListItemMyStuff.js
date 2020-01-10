import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import IconProvider from '../../components/IconProvider';
import Monent from 'react-moment';
import LinearGradient from 'react-native-linear-gradient';
function ListItemMyStuff(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c68080ea2b7942d3b9b9c6acaa52bc47',
    )
      .then(res => res.json())
      .then(res => {
        setArticles([...articles, ...res.articles]);
        setLoading(false);
      });
  }, [articles]);

  function goBacks() {
    props.pr.navigation.navigate('DetailListSanPham');
    console.log(props.navigation);
  }
  return (
    <View style={styles.viewList}>
      <FlatList
        data={articles}
        // keyExtractor={item => item.description}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.viewImg}>
              <Image style={styles.img} source={{uri: item.urlToImage}} />
            </View>
            <View style={styles.viewListText}>
              <Text numberOfLines={1} style={styles.txtTitle}>
                {item.title}
              </Text>
              <View style={styles.viewAddress}>
                <Text style={styles.txtAddress}>Hoàng Mai -</Text>
                <Monent element={Text} fromNow style={styles.txtAddress}>
                  {item.publishedAt}
                </Monent>
              </View>
              <Text style={styles.txtNhuCau}> Nhu cầu: </Text>
              <Text style={styles.txtGia}>9.000.000 VND</Text>
              <View style={styles.viewBtn}>
                <LinearGradient
                  colors={['#70B19D', '#70B19D', '#5ABD8C']}
                  style={styles.linearGradient}>
                  <TouchableOpacity style={styles.viewHeart}>
                    <Text style={styles.txtSelect}>Chỉnh sửa</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#808080', '#FFFFFF', '#FFFFFF']}
                  style={styles.gradientDelte}>
                  <TouchableOpacity style={styles.viewHeart}>
                    <Text style={styles.txtDelete}>Delete</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
export default ListItemMyStuff;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E3E3E3',
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
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  viewImg: {
    justifyContent: 'center',
    height: 150,
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
    alignSelf: 'center',
    justifyContent: 'center',
  },
  iconHeart: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  viewAddress: {
    flexDirection: 'row',
  },
  linearGradient: {
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  txtSelect: {
    color: 'white',
  },
  viewBtn: {
    flexDirection: 'row',
  },
  gradientDelte: {
    width: 60,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  txtDelete: {
    color: 'black',
  },
});
