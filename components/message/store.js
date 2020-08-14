const Model = require('./Model');
const db = require("mongoose");
db.Promise = global.Promise;
db.connect("mongodb://user:25285789@cluster0-shard-00-00.hochh.mongodb.net:27017,cluster0-shard-00-01.hochh.mongodb.net:27017,cluster0-shard-00-02.hochh.mongodb.net:27017/<telegram>?ssl=true&replicaSet=atlas-lnnmdu-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
console.log('[db] conectada con exito')

function addMessage(message) {
  const myMessage = new Model(message)
  myMessage.save();
}

async function getMessage() {
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessage,
};
