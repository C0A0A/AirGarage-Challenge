const {makeRequest} = require('../utils/apiRequest.js');
const {mapper, filter} = require('../utils/dataHandlers.js');
const {getGeolocalization} = require('../utils/geoLocation.js');

const getParkings = async (req, res, next) => {
	let location = req.query.location;
	const score = Number(req.query.score) || 3;
	const offset = req.query.offset ? Number(req.query.offset) : 0;
	const limit = req.query.limit ? Number(req.query.limit) : 6;

	try {
		if (!location) {
			const ipAddress = req.ip;
			const geoData = await getGeolocalization(ipAddress);
			location = geoData.city || geoData.country;
			if (!location) {
				res.status(400).send({response: {}, message: 'Bad Request'});
			} else {
				console.log('Geolocalizado:', location);
			}
		} else {
			const {data} = await makeRequest(location);
			const businessesInfo = mapper(data.businesses);
			const result = filter(businessesInfo, score);
			const totalPages = Math.ceil(result.length / limit);
			const pages = new Array(totalPages)
				.fill(`${process.env.BACKEND_URL}/parkings?`)
				.map(
					(path, index) =>
						path +
						`location=${location}&score=${score}&offset=${
							limit * index
						}&limit=${limit}`
				);

			res.send({
				response: {parkings: result.slice(offset, limit + offset), pages},
				message: 'Success'
			});
		}
	} catch (err) {
		err.response ? console.log(err.response.data) : console.log(err);
		next(err);
	}
};

module.exports = {
	getParkings
};
