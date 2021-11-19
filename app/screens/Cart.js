import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Button,
} from 'react-native';

import CartController from '../controllers/CartController';
const windowHeight = Dimensions.get('window').height;

const Item = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{`${item.title} (1)`}</Text>
    <Text style={styles.title}>{` Rs ${item.price}`}</Text>
  </View>
);

const Cart = props => {
  const {itemsInCart, clearItemsCart, orderSuccess} = CartController();
  const [sum, setSum] = useState(0);
  const renderItem = ({item}) => <Item item={item} />;

  useEffect(() => {
    calculateCost(itemsInCart);

    if (orderSuccess) {
      setTimeout(goHome, 3000);
    }

  }, [itemsInCart,orderSuccess]);

  const calculateCost = itemsInCart => {
    let sum = 0;
    itemsInCart.forEach(function(value, index, arry) {
      sum += value.price;
    });
    setSum(sum);
  };
const goHome =()=>{
  clearItemsCart(false);
  props.navigation.navigate('HomeScreen');
};
  const placeOrder = ()=>{
    console.log('--------')
    clearItemsCart(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      {itemsInCart.length>0?
        <View style={styles.container}>
          <FlatList
        data={itemsInCart}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id + index}
      />
      <View
        style={{
          height: windowHeight * 0.1,
          // backgroundColor: 'red',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 35, marginLeft: 20, fontWeight: 'bold'}}>
          {`Rs ${sum}`}
        </Text>
        <View style={{marginRight:30}}>
          <Button title="Place Order" color="orange" onPress={() => placeOrder()} />
        </View>
      </View>
      </View>
            :
            orderSuccess?
            <View style={{
              flex:1,
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              backgroundColor:'#C3E0E5',

            }}>
            <Text style={{color:'green',fontSize:30,fontWeight:'bold'}}>Order Successful!</Text>
            <Text style={{color:'black',fontSize:12,fontWeight:'bold'}}>Our delivery agent will contacted you shortly</Text>
            </View>
            :
            <View style={styles.noItems}>
            <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Your cart is empty</Text>
            <Text style={{color:'black',fontSize:12,fontWeight:'bold'}}>Please select items from home</Text>
            </View>
            }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  noItems:{
    flex: 1,
    backgroundColor:'#C3E0E5',
    justifyContent:'center',
    alignItems:'center',

  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#C3E0E5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

export default Cart;
