const { MongoClient } = require("mongodb");

const url = 'mongodb://bashof:bashof@localhost:27017?authSource=admin';
const client = new MongoClient(url);

(async () => {
    try {
        await client.connect();
        console.log('konekSI ke MongoDB SUKSES')
    } catch (error) {
        console.log(error)
    }
})();

const db = client.db('eduexam-native');

module.exports = db;