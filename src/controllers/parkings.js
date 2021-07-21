const {makeRequest} = require('../utils/apiRequest.js');
const {mapper, filter} = require('../utils/dataHandlers.js');

const getParkings = async (req, res, next) => {
	const location = req.query.location;
	const score = Number(req.query.score) || 2.5;

	try {
		if (!location) {
			throw new Error();
		}
		const {data} = await makeRequest(location);
		const businessesInfo = mapper(data.businesses);
		const filteredBusinesses = filter(businessesInfo, score);

		res.send({response: filteredBusinesses, message: 'Success'});
	} catch (err) {
		err.response ? console.log(err.response.data) : console.log(err);
		next(err);
	}
};

module.exports = {
	getParkings,
};
