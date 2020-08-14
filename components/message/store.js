const Model = require("./Model");
const db = require("mongoose");
db.Promise = global.Promise;
db.connect(
  "mongodb://user:25285789@cluster0-shard-00-00.hochh.mongodb.net:27017,cluster0-shard-00-01.hochh.mongodb.net:27017,cluster0-shard-00-02.hochh.mongodb.net:27017/<telegram>?ssl=true&replicaSet=atlas-lnnmdu-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
console.log("[db] conectada con exito");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findById(id);
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.deleteOne({
      _id: id
  });
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage
};
