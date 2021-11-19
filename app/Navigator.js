import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './screens/Login';
import Home from './screens/Home';
import Details from './screens/Details';
import Cart from './screens/Cart';
import Favorites from './screens/Favorites';
import Landing from './screens/Landing';
import Notifications from './screens/Notifications';

const RootStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();
const favoritesStack = createStackNavigator();
const CartStack = createStackNavigator();
const notificationsStack = createStackNavigator();

const AuthStackScreen = function() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Landing"
        options={{headerShown: false}}
        component={Landing}
      />
      <AuthStack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Login}
      />
    </AuthStack.Navigator>
  );
};

const HomeStackScreen = function() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen
        name="HomeScreen"
        options={{headerLeft: null}}
        component={Home}
      />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};
const CartStackScreen = function() {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <CartStack.Screen
        name="ExploreScreen"
        options={{headerLeft: null}}
        component={Cart}
      />
    </CartStack.Navigator>
  );
};
const favoritesStackCreen = function() {
  return (
    <favoritesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <favoritesStack.Screen
        name="ProfileScreen"
        options={{headerLeft: null}}
        component={Favorites}
      />
    </favoritesStack.Navigator>
  );
};
const notificationStackCreen = function() {
  return (
    <notificationsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <notificationsStack.Screen
        name="NotificationsScreen"
        options={{headerLeft: null}}
        component={Notifications}
      />
    </notificationsStack.Navigator>
  );
};
const BottomTabNavigator = function() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: 'black', height: 80},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart';
          } else if (route.name === 'favorites') {
            iconName = focused ? 'heart' : 'heart';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Cart" component={CartStackScreen} />
      <Tabs.Screen name="favorites" component={favoritesStackCreen} />
      <Tabs.Screen name="Notifications" component={notificationStackCreen} />
    </Tabs.Navigator>
  );
};

const Navigator = function(props) {
  return (
    <RootStack.Navigator
      initialRouteName="AuthStackCreen"
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="AuthStackCreen" component={AuthStackScreen} />
      <RootStack.Screen name="Tabs" component={BottomTabNavigator} />
    </RootStack.Navigator>
  );
};

export default Navigator;
