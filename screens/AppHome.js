import React, { useState, useEffect} from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, Image, Text, ScrollView, Button } from 'react-native';
import Header from '../components/Header';
import Loader from '../components/Loader'
import Feather from 'react-native-vector-icons/Feather';import { SafeAreaView } from 'react-native-safe-area-context';

const AppHome = (navigation) => {
  
  const [isLoading, setIsLoading] = useState(false);
 
  const [feed, setFeed] = useState([]);
  const [topHeadline, setTopHeadline] = useState([]);

  const getApiNutrit = () => {
    setIsLoading(true);
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=2954e9a9ecc1447fb3aff06601dfedb5")
      .then((re) => re.json())
      .then((re) => {
        setFeed(re.articles);
        setIsLoading(false);
        // console.log(re.articles);
      });
  }

  useEffect(() => {
    getApiNutrit();
  }, [])



  const topHeadlines = () => {
    setIsLoading(true);
    fetch("https://newsapi.org/v2/top-headlines?q=tech&sortBy=popularity&apiKey=2954e9a9ecc1447fb3aff06601dfedb5")
      .then((top) => top.json())
      .then((top) => {
        setTopHeadline(top.articles);
        setIsLoading(false);
        // console.log(re.articles);
      });
  }

  useEffect(() => {
    topHeadlines();
  }, [])



  return (
    <SafeAreaView>
       {isLoading ? <Loader /> : null}
     
      <ScrollView>
        <Header />
        
        <View style={styles.mainStyle}>
         
          <View style={{ backgroundColor: 'black', width: '100%', height: 200, borderRadius: 20, }}/>
           
            <View style={styles.FNewsContainer}>
              <Text style={styles.FNewsTxt}>Hottest News</Text>
              <FlatList
                style={{marginTop:5}}
            showsHorizontalScrollIndicator='false'
            // numColumns={2}
            horizontal={true}
            data={topHeadline}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) =>
              <TouchableOpacity key={item.id}>
                <View style={styles.viewItem}>
                  <Image source={{ uri: item.urlToImage }} key={index} style={{ height: 120, borderRadius: 10 }} />
                  <View style={styles.itemView}>
                  <Text numberOfLines={1} style={styles.authorText}>{item.author}</Text>
                  <Text numberOfLines={2} style={styles.textItem}>{item.title}</Text>
                  </View>
                  {/* <View style={{ backgroundColor: 'red', width: 20, height: 20, borderRadius: 50, }}>
            
             </View> */}
                </View>
              </TouchableOpacity>}
          />
            </View>
            
            <View style={styles.FNewsContainer} >
              <Text style={styles.FNewsTxtsec}> Latest News</Text>
              <FlatList
              
                style={{marginTop:5}}
            showsVerticalScrollIndicator='false'
            data={feed}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) =>
              <TouchableOpacity key={item.source.id}>
                <View style={styles.viewItemone}>
                  <Image source={{ uri: item.urlToImage }} key={index} style={{ height: 120, borderRadius: 10 }} />
                  <View style={styles.itemView}>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ flexDirection: 'row', width:130 }}>
                      <Feather name="feather" size={15} color='grey' />
                        {/* <View style={{backgroundColor:'black', width:15, height:15, borderRadius:10,}}/> */}
                      <Text numberOfLines={1} style={styles.authorText}> {item.author}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginLeft:30 }}>
                      <Feather name="calendar" size={15} color='grey' />
                      <Text numberOfLines={1} style={styles.authordate}> {item.publishedAt}</Text>
                      </View>

                    </View>
                  <Text numberOfLines={2} style={styles.textItem}>{item.title}</Text>
                  </View>
                  {/* <View style={{ backgroundColor: 'red', width: 20, height: 20, borderRadius: 50, }}>
            
             </View> */}
                </View>
              </TouchableOpacity>}
          />
    </View>

        </View>
        <Button
  title="Go to Details... again"
  onPress={() => navigation.push('Home')}
/>
          </ScrollView>
        
         
 

   
    </SafeAreaView>
    
  )
};
const styles = StyleSheet.create({
  slideBar: {
    height: 200,
    margin: 5,
    backgroundColor: 'grey',
  },
  mainStyle: {
    padding: 15,
  },
  viewItem: {
    maxWidth: 180,
    backgroundColor: "white",
    height: 230,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 10,
  },
  textItem: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '600',
    width: '100%'
  },
  authorText: {
    fontSize: 13,
color:'grey'
  },
  authordate: {
    fontSize: 13,
    color:'grey'
  },
  itemView: {
    marginTop:15,
  },
  FNewsContainer: {
    marginTop:30,
  },
  FNewsTxt: {
    fontSize: 23,
    fontWeight: '600',
    marginLeft: 10,
    color:'#ec5514'
  },
  FNewsTxtsec: {
    fontSize: 23,
    fontWeight: '600',
    marginLeft: 10,
    color:'black'
  },
  viewItemone: {
    marginTop:10,
    width: '100%',
    height: 220,
   
    backgroundColor: "white",
    height: 230,
  
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 10,
  },

});


export default AppHome;