import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

function ListTopTrader(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
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
  function onPressToProfileUser() {
    props.prs.navigation.navigate('ProfileUserOther');
  }
  return (
    <View style={styles.viewAvatar}>
      <FlatList
        data={articles}
        // keyExtractor={item => item.description}
        horizontal={true}
        renderItem={({item}) => (
          <View style={styles.viewImg}>
            <TouchableOpacity onPress={onPressToProfileUser}>
              <Image style={styles.img} source={{uri: item.urlToImage}} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default ListTopTrader;
const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  viewImg: {
    justifyContent: 'center',
  },
  viewAvatar: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
