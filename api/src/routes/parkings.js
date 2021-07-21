const {Router} = require('express');
const router = Router();
const {getParkings} = require('../controllers/parkings.js');

router.get('/', getParkings);

module.exports = router;
