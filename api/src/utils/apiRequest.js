const axios = require('axios');
const {YELP_BASE_URL, YELP_API_KEY} = process.env;

const makeRequest = (location) => {
	const config = {
		method: 'get',
		baseURL: `${YELP_BASE_URL}?location=${location}&categories=parking`,
		headers: {Authorization: `Bearer ${YELP_API_KEY}`}
	};

	return axios(config);
};

module.exports = {
	makeRequest
};
