const router = require("express").Router();
const Product = require("./model");
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const fs = require('fs');
const path = require('path');


router.post('/product',upload.single('image'), async (req, res) => {
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
});

module.exports = router;