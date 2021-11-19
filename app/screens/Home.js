import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchController from '../controllers/HomeController';
import TopNavBar from '../components/TopNavBar';
const image = require('../assests/images/coffee1.jpeg');
const windowWidth = Dimensions.get('window').width;

const Home = props => {
  const [selectedId, setSelectedId] = useState(null);
  const {searchData,searchProcess} = SearchController();

  useEffect(() => {
    searchProcess('');
  }, []);

  const Item = ({item, onPress}) => (
    <View
      style={{
        width: windowWidth / 3,
        height: windowWidth / 1.9,
        margin: 5,
        backgroundColor: 'gray',
        borderRadius: 20,
      }}>
      <TouchableOpacity onPress={onPress}>
        <FastImage
          style={{
            height: windowWidth / 3.5,
            borderTopEndRadius: 20,
              borderTopLeftRadius: 20,}}
              source={image}
          />
        <Text
          style={{
            marginTop: 5,
            color: 'white',
            paddingLeft: 5,
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            marginTop: 5,
            color: 'white',
            paddingLeft: 5,
          }}>{`Rs- ${item.price}`}</Text>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginRight: 5,
          }}>
            <Ionicons name='add-circle' type="MaterialIcons" size={30} color={'white'}/>
          </View>
          
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => goToDetails(item)} />;
  };

  const goToDetails = item => {
    setSelectedId(item.id)
    props.navigation.navigate('Details', {selected: item});
  }

  const search = text => {
    searchProcess(text)
  }

  return (
    <SafeAreaView style={styles.containerSafe}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'black',
        }}>
        <TopNavBar hideBack />
        <View style={{width: 200, margin: 20}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>
            Find the best coffee for you
          </Text>
        </View>
        <View style={styles.searchBox}>
          <TextInput
            style={{
              flex: 1,
              margin: 10,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: 'gray',
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}
            placeholder={"Search"}
            placeholderTextColor={'gray'}
            onChangeText={e=>{search(e)}}
         
          />
        </View>
        <View style={styles.coffeeList}>
          <FlatList
            horizontal
            data={searchData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    height: 70,
  },
  coffeeList: {
    width: windowWidth,
    flexDirection: 'row',
    height: 200,
  },
  loader: {
    color: 'red',
  },
  containerSafe: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    borderRadius: 0,
    marginTop: 10,
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default Home;
