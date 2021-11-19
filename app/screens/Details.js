import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopNavBar from '../components/TopNavBar';
import CartController from '../controllers/CartController';
import FavController from '../controllers/FavController';
import AuthController from '../controllers/AuthController';

const image = require('../assests/images/coffee1.jpeg');

const Details = props => {
  const {addItem} = CartController();
  const {addFavItem} = FavController();
  const {auth} = AuthController();
  const {selected} = props.route.params;

  const goBack = () => {
    props.navigation.navigate('HomeScreen');
  };
  const goToCart= () => {
    props.navigation.navigate('Cart');
  };
  const goTologin = () => {
    props.navigation.navigate('Landing');
  };


  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.containerSafe}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <TopNavBar hideBack={false} onPress={goBack} />
          <View style={{width: 200, margin: 20}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>
              <Text>{selected.title}</Text>
              <TouchableOpacity
                onPress={() => {
                  addFavItem(selected);
                }}>
                <Ionicons
                  name="bookmark"
                  type="MaterialIcons"
                  size={35}
                  color="yellow"
                />
              </TouchableOpacity>
            </Text>
          </View>
          <View style={styles.detailsBox}>
            <Text style={[styles.details]}>{`RS ${selected.price}`}</Text>
            <Text style={styles.details}>{selected.ingredients}</Text>
            <Text style={styles.details}>{selected.description}</Text>
            <Text style={styles.details}>{selected.rating}</Text>
          </View>
          <View>
            <Button
              title="Add to cart"
              color="green"
              onPress={() => {
                if (auth !== null && auth.authenticated) addItem(selected);
                else goTologin();
              }}
            />
            <Button
              title="Buy Now"
              color="orange"
              onPress={() => {
                if (auth !== null && auth.authenticated) goToCart(selected);
                else goTologin();
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  detailsBox: {
    flexDirection: 'column',
    padding: 5,
    margin: 5,
  },
  details: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: 'gray',
  },
  containerSafe: {
    flex: 1,
  },
});
export default Details;
