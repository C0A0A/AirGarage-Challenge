const axios = require('axios');

const getParkings = async (req, res, next) => {
	res
		.send({response: 'hola', message: 'Success'})

		.catch((err) => next(err));
};

module.exports = {
	getParkings,
};
