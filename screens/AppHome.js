import React, { useState, useEffect} from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, Image, Text, ScrollView, Button, SectionList } from 'react-native';

import SearchInput from '../components/SearchInput';
import Loader from '../components/Loader'

import Feather from 'react-native-vector-icons/Feather';

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
    <View style={{flex:1, backgroundColor:'white'}}>
     
     {isLoading ? <Loader /> : null}
  
      <View style={styles.mainStyle}>       
        <FlatList
         
           initialNumToRender={10}
           maxToRenderPerBatch={10}
              ListHeaderComponent={() => {
              return (
                <View style={{marginVertical:10}}>
              
                  <SearchInput />
                  <View style={{ backgroundColor: 'black', width: '100%', height: 200, borderRadius: 20, marginTop:30 }}/>
      
           <View style={styles.FNewsContainer}>
           <Text style={styles.FNewsTxt}>Hottest News</Text>
                    <FlatList
                      initialNumToRender={10}
                      maxToRenderPerBatch={10}
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
                  </View>
            )
          }}
          
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
                  
                </View>
            </TouchableOpacity>
            
            }
          />
 

        </View>
    </View>
    
  )
};
const styles = StyleSheet.create({

  mainStyle: {
    paddingHorizontal: 15,
  },
  viewItem: {
    maxWidth: 180,
    height: 230,
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor:'#eaeaea',
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
    borderColor:'#eaeaea',
    marginTop:10,
    width: '100%',
    height: 220,
    borderWidth:1,
    height: 230,
  
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 10,
  },

});


export default AppHome;