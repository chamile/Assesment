import React, {useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import AuthController from '../controllers/AuthController';
const image = require('../assests/images/coffee1.jpeg');

const Landing = props => {
  const {auth, loginProcess, loading} = AuthController();
  useEffect(() => {
    if (auth !== null) {
      if (auth.authenticated) {
        props.navigation.navigate('Tabs', {
          id: '123',
          userName: 'chamila',
          password: 'test',
        });
      }
    }
  }, [auth, loading]);
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.containerSafe}>
        <View style={styles.container}>
          {loading ? <ActivityIndicator size="large" color="orange" /> : null}
          <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 10,
              }}>
              SignUp
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
            loginProcess('chamila', 'test');
          }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 10,
              }}>
              SignIn
            </Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingTop: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'white',
                marginLeft: 10,
              }}>
              I'll do it later,
            </Text>
            <TouchableOpacity
              onPress={() => {
              props.navigation.navigate('Tabs', {
                  id: '123',
                name: 'chamila',
                });
            }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: 'blue',
                  marginLeft: 10,
                }}>
                Skip Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    borderRadius: 0,
    marginTop: 10,
    backgroundColor:'orange',
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

export default Landing;
