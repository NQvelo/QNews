import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SearchBar} from 'react-native-screens';

import Categories from '../components/Categories';
import Loader from '../components/Loader';
import SearchInput from '../components/SearchInput';

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
  const firstCategory = () => {
    setIsLoading(true);
    fetch(
      ' https://newsapi.org/v2/top-headlines?apiKey=2954e9a9ecc1447fb3aff06601dfedb5&q=apple',
    )
      .then(re => re.json())
      .then(re => {
        setFeed(re.firstCateg);
        setIsLoading(false);
        console.log(re.firstCateg);
      });
  };

  useEffect(() => {
    explorePageContent();
    firstCategory();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <View style={styles.mainView}>
      <Categories
        onPressone={() => console.log('cdi')}
        onPresstwo={() => console.log('fdhb')}
      />
      <FlatList
        style={{marginBottom: 50}}
        data={feed}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('statia', item)}>
            <View style={styles.viewItem}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={{uri: item.urlToImage}}
                  key={index}
                  style={{height: 70, width: 70, borderRadius: 7}}
                />
                <View
                  style={{padding: 10, backgroundColor: 'white', width: '80%'}}>
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
    margin: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});

export default Discover;
