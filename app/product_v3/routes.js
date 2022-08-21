const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const prodContrl = require('./controller3');

router.get('/product', prodContrl.index3);
router.get('/product/:id', prodContrl.view3);
router.post('/product', upload.single('image'), prodContrl.store3);
router.put('/product/:id', prodContrl.update3);
router.delete('/product/:id', prodContrl.destroy3);

module.exports = router;