const Product = require("./model");
const path = require('path');
const fs = require('fs');

const index2 = async (req, res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}

const view2 = async (req, res) => {
    let id = req.params.id
    let product = await Product.findOne({where: {id: id}})
    res.status(200).send(product)
}

const store2 = async (req, res) => {
    const {users_id, name, price, stock, status} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target)
        try {
            await Product.sync();
            const result = await Product.create({users_id, name, price, stock, status, image_url: `http://localhost:3001/public/${image.originalname}`});
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }
}

const update2 = async (req, res) => {
    let id = req.params.id
    const product = await Product.update(req.body, {where: {id: id}})
    res.status(200).send(product)
}

const destroy2 = async (req, res) => {
    let id = req.params.id
    await Product.destroy({where: {id: id}})
    res.status(200).send('Product is deleted !!')
}

module.exports = {
    index2,
    store2,
    view2,
    update2,
    destroy2
}