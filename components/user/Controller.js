const store = require('./Store');
const { response } = require('express');

function addUser(name) {
  if(!name){
    return Promise.reject('Invalid Name');
  }

  const user = {
    name,
  };
  return store.add(user)
}

function getUsers() {
  return new Promise ((resolve, reject) => {
    resolve(store.list())
  })
}
module.exports = {
  addUser,
  getUsers
}