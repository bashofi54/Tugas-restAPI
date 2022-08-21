const Product = require("./model");
const path = require('path');
const fs = require('fs');
const {ObjectId} = require('bson')

const store4 = (req, res) => {
    const {name, price, stock, status} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target)
        Product.create({name, price, stock, status, image_url: `http://localhost:3001/public/${image.originalname}`})
            .then(result => res.send(result))
            .catch(error => res.send(error));
    }  
}

const index4 = (req, res) => {
    Product.find()
    .then(result => res.send(result))
    .catch(error => res.send(error));
}

const view4 = (req, res) => {
    const {id} = req.params;
    Product.findOne({_id: ObjectId(id)})
    .then(result => res.send(result))
    .catch(error => res.send(error));
}

const destroy4 = (req, res) => {
    const {id} = req.params;
    Product.deleteOne({_id: ObjectId(id)})
    .then(result => res.send(result))
    .catch(error => res.send(error));
}

const update4 = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        Object.assign(product, req.body);
        product.save();
        res.send(product)
    } catch {
        res.status(404).send({error: 'error boskuuuuu!!!'})
    }
}

module.exports = {
    store4,
    index4,
    view4,
    destroy4,
    update4
}