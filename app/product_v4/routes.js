const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const prodContrl = require('./controller4');

router.get('/product', prodContrl.index4);
router.get('/product/:id', prodContrl.view4);
router.post('/product', upload.single('image'), prodContrl.store4);
router.put('/product/:id', prodContrl.update4);
router.delete('/product/:id', prodContrl.destroy4);

module.exports = router;