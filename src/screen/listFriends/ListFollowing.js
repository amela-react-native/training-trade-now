import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import ItemListFriends from '../../components/ItemListFriends';
import {SearchBar} from 'react-native-elements';

export default function ListFollowing(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      'https://newsapi.org/v2/everything?q=apple&from=2020-01-13&to=2020-01-13&sortBy=popularity&apiKey=c68080ea2b7942d3b9b9c6acaa52bc47',
    )
      .then(res => res.json())
      .then(res => {
        setArticles([...articles, ...res.articles]);
        setLoading(false);
      });
  }, [articles]);

  function goToDetail() {
    props.navigation.navigate('ProfileUserOther');
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBar
          platform="android"
          inputContainerStyle={styles.inputSearchbar}
          placeholder="Type Here ..."
        />
        <FlatList
          data={articles}
          // keyExtractor={item => item.description}
          renderItem={({item}) => (
            <ItemListFriends
              style={styles.itemFriends}
              avatar={item.urlToImage}
              name={item.author}
              title={'Following'}
              onPress={goToDetail}
            />
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: 'white',
  },
  inputSearchbar: {
    backgroundColor: '#D2D7DF',
    borderRadius: 30,
    width: '85%',
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  itemFriends: {
    marginTop: 10,
  },
});
