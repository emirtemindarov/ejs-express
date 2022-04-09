var MongoClient = require("mongodb").MongoClient


MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) throw err;
  var newDB = client.db('planets-ejs');
  newDB.collection('planets').insertOne({name:"Винни Пух"},function (findErr, result) {
    if (findErr) throw findErr;
    // console.log(result.name);
    client.close();
  });
}); 