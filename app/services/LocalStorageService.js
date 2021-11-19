import {AsyncStorage} from 'react-native';

const addItemToFavorites = async item => {
  let itemsListArray = [];
  try {
    const storedNumbers = await AsyncStorage.getItem('USER_FAV_LIST');
    if (storedNumbers !== null) {
      itemsListArray = JSON.parse(storedNumbers);
    }
    itemsListArray.push(item)
    await AsyncStorage.setItem('USER_FAV_LIST', JSON.stringify(itemsListArray));
    const newList =  await AsyncStorage.getItem('USER_FAV_LIST');
    return newList;
  } catch (error) {
    // Error saving data
  }
};

const getFavoritesList = async () => {
  const storedNumbers =  await AsyncStorage.getItem('USER_FAV_LIST');
  return storedNumbers;
};

export default {
  addItemToFavorites,
  getFavoritesList,
};
