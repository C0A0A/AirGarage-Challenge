const {makeRequest} = require('../utils/apiRequest.js');
const {mapper, filter} = require('../utils/dataHandlers.js');

const getParkings = async (req, res, next) => {
	const location = req.query.location;
	const score = Number(req.query.score) || 2.5;
	const offset = req.query.offset ? Number(req.query.offset) : 0;
	const limit = req.query.limit ? Number(req.query.limit) : 6;

	try {
		if (!location) {
			throw new Error();
		}
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
			message: 'Success',
		});
	} catch (err) {
		err.response ? console.log(err.response.data) : console.log(err);
		next(err);
	}
};

module.exports = {
	getParkings,
};
