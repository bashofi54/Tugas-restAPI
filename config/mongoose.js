const mongoose = require("mongoose");

mongoose.connect('mongodb://bashof:bashof@localhost:27017/eduexam-mongoose?authSource=admin');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Server Database Terhubung'));