import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import IconProvider from '../../components/IconProvider';

function SlideShowADS(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');

  function onPressDetail(item) {
    props.pr.navigation.navigate('DetailListSanPham', {
      title: item.title,
      url: item.urlToImage,
      content: item.content,
      publishedAt: item.publishedAt,
      author: item.author,
      description: item.description,
    });
  }
  useEffect(() => {
    setLoading(true);
    fetch(
      'https://newsapi.org/v2/top-headlines?country=au&apiKey=c68080ea2b7942d3b9b9c6acaa52bc47',
    )
      .then(res => res.json())
      .then(res => {
        setArticles([...articles, ...res.articles]);
        setLoading(false);
      });
  }, [articles]);
  return (
    <View style={styles.viewAds}>
      <FlatList
        data={articles}
        // keyExtractor={item => item.description}
        horizontal={true}
        renderItem={({item}) => (
          <View style={styles.viewImg}>
            <ImageBackground
              style={styles.img}
              source={{uri: item.urlToImage}}
              imageStyle={styles.imgBackground}>
              <TouchableOpacity
                style={styles.bntSeeMore}
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
                <View style={styles.viewSeeMore}>
                  <Text>See More</Text>
                  <View style={styles.viewiconRight}>
                    <IconProvider
                      name={'chevron-right'}
                      size={20}
                      color={'white'}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
}
export default SlideShowADS;
const styles = StyleSheet.create({
  img: {
    height: '95%',
    width: 300,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
  },
  viewImg: {
    justifyContent: 'center',
  },
  viewAds: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imgBackground: {
    borderRadius: 10,
  },
  bntSeeMore: {
    backgroundColor: 'white',
    width: 120,
    height: 40,
    marginLeft: 30,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  viewSeeMore: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  viewiconRight: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#FF6969',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
