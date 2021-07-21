const {Router} = require('express');
const router = Router();
const parkings = require('./parkings.js');

router.use('/parkings', parkings);

module.exports = router;
