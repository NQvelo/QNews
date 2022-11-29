import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';

import Categories from '../components/Categories';
import SearchInput from '../components/SearchInput';
import Loader from '../components/Loader';

const Discover = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [feed, setFeed] = useState([]);

  const explorePageContent = () => {
    setIsLoading(true);
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=2954e9a9ecc1447fb3aff06601dfedb5',
    )
      .then(re => re.json())
      .then(re => {
        setFeed(re.articles);
        setIsLoading(false);
        console.log(re.articles);
      });
  };

  useEffect(() => {
    explorePageContent();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <View style={styles.mainView}>
      <SearchInput />
      <Categories />

      <FlatList
        data={feed}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('statia', item)}>
            <View style={styles.viewItem}>
              <View style={styles.itemView}>
                <Text numberOfLines={1} style={styles.authorText}>
                  {item.author == null ? (
                    <Text>No Writer</Text>
                  ) : (
                    <>{item.source.name}</>
                  )}
                </Text>

                <Text numberOfLines={2} style={styles.textItem}>
                  {item.title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
  },
  authorText: {
    fontWeight: '600',
  },
  viewItem: {
    maxWidth: '100%',
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 10,
  },
});

export default Discover;
