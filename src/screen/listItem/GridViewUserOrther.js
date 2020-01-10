import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
export default function GridViewUserOrther(props) {
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
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        style={styles.listImg}
        renderItem={({item, index}) => (
          <View style={styles.viewImg}>
            <TouchableOpacity
            //   onPress={() =>
            //     props.pr.navigation.navigate('DetailSwiperImage', {
            //       url: item.articles,
            //       index: index,
            //     })
            //   }
            >
              <Image style={styles.img} source={{uri: item.urlToImage}} />
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: width / 2.12,
    height: 150,
    borderRadius: 10,
    // padding: 5,
    margin: 5,
  },
  listImg: {
    width: '100%',
    marginRight: 0,
  },
});
