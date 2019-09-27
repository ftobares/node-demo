module.exports = {
    url: 'mongodb+srv://userConnect:4rr0zc0nl3ch3@snoopcluster-roqsm.mongodb.net/demoDB?retryWrites=true&w=majority'
}

/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ftobares:YEgK3uiEbNGoa33EEdbe@snoopcluster-roqsm.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/