const router = require("express").Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const prodContrl = require('./controller2')


router.get('/product', prodContrl.index2);
router.get('/product/:id', prodContrl.view2);
router.post('/product',upload.single('image'), prodContrl.store2);
router.put('/product/:id', prodContrl.update2);
router.delete('/product/:id', prodContrl.destroy2);

module.exports = router;