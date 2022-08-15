const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mas:<password>@cluster0.ssx7t04.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



// m'ongodb+srv://mas:<password>@cluster0.ssx7t04.mongodb.net/?retryWrites=true&w=majority'