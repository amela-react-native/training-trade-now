import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Monent from 'react-moment';
export default function ListItemMessage(props) {
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

  function goToDetail() {
    props.pr.navigation.navigate('DetailMessage');
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        // keyExtractor={item => item.description}
        renderItem={({item}) => (
          <View style={styles.viewContain}>
            <TouchableOpacity style={styles.viewContain} onPress={goToDetail}>
              <View style={styles.viewAvatar}>
                <Image style={styles.img} source={{uri: item.urlToImage}} />
              </View>
              <View style={styles.viewTitle}>
                <View style={styles.viewTime}>
                  <Text numberOfLines={5} style={styles.txtUserName}>
                    {item.author}
                  </Text>
                  <Monent element={Text} fromNow style={styles.txtAddress}>
                    {item.publishedAt}
                  </Monent>
                </View>
                <Text numberOfLines={1} style={styles.txtDescription}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 60,
    width: 60,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  viewContain: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  viewTitle: {
    width: '80%',
    paddingLeft: 20,
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#727C8E',
  },
  viewAvatar: {
    width: '20%',
  },
  txtUserName: {
    fontSize: 15,
    fontWeight: 'bold',
    width: '70%',
  },
  viewTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtAddress: {
    width: '30%',
  },
  txtDescription: {
    fontSize: 12,
  },
});
