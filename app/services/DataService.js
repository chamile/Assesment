import Axios from './Axios';

export default class DataService {
  static async authenticate(userName, password) {
    //API Call goes here
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({data: {authenticated: true, name: 'chamila'}});
    }, 1000);
    });
  }
}
