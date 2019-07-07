import Axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMyOrders = uid => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}/orders.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const orders = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        orders.push(res.data[fbKey]);
      });
      resolve(orders);
    }).catch(err => reject(err));
});

const deleteOrder = orderId => Axios.delete(`${baseUrl}/orders/${orderId}.json`);

const postOrder = newOrder => Axios.post(`${baseUrl}/orders.json`, newOrder);

const putOrder = (orderId, updateOrder) => Axios.put(`${baseUrl}/orders/${orderId}.json`, updateOrder);

export default {
  getMyOrders,
  deleteOrder,
  postOrder,
  putOrder,
};
