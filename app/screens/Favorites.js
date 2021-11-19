import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import FavController from '../controllers/FavController';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Favorites = () => {
  const {favList} = FavController();
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: 200, margin: 20}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 24}}>
          Your favorites list
        </Text>
      </View>
      <FlatList
        data={favList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#A0E7E5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'black',
  },
});

export default Favorites;
