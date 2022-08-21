const db = require("../../config/mongodb")
const {ObjectId} = require('bson')
const fs = require('fs');
const path = require('path');

const index3 = (req, res) => {
    db.collection('products').find()
    .toArray()
    .then(result => res.send(result))
    .catch(error => res.send(error));
}

const view3 = (req, res) => {
    const {id} = req.params;
    db.collection('products').findOne({_id: ObjectId(id)})
    .then(result => res.send(result))
    .catch(error => res.send(error));
}

const store3 = (req, res) => {
    const {name, price, stock, status} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target)
        db.collection('products').insertOne({name, price, stock, status, image_url: `http://localhost:3001/public/${image.originalname}`})
        .then(result => res.send(result))
        .catch(error => res.send(error));
    }  
}

const update3 = (req, res) => {
    const {id} = req.params;
    const {nama} = req.params;
    db.collection('products').updateOne({_id: ObjectId(id)}, {$rename: {name: ObjectId(nama) }})
    .then(result => res.send(result))
    .catch(error => res.send(error));
}

const destroy3 = (req, res) => {
    const {id} = req.params;
    db.collection('products').deleteOne({_id: ObjectId(id)})
    .then(result => res.send(result))
    .catch(error => res.send(error));
}


module.exports = {
    index3,
    view3,
    store3,
    update3,
    destroy3
}