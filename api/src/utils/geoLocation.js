const axios = require('axios');
const baseUrl = process.env.GEO_BASE_URL;
const apiKey = process.env.GEO_API_KEY;

const getGeolocalization = async (ipAddress) => {
	try {
		const {data} = await axios.get(
			`${baseUrl}?api_key=${apiKey}&ip_address=` + ipAddress
		);
		return data;
	} catch (err) {
		return {};
	}
};

module.exports = {
	getGeolocalization
};
