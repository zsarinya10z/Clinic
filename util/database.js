const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    // MongoClient.connect('mongodb://admin:password@localhost:27017/db', function (err, db)
    MongoClient.connect("mongodb+srv://sansinee:sansinee@cluster0.lbxs2.mongodb.net/travel")
        .then(client => {
            console.log('Connected!');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;