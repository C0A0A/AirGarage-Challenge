const mapper = (data) => {
	return data.map((businesses) => {
		return {
			name: businesses.name,
			image_url: businesses.image_url,
			address: businesses.location.display_address,
			rating: businesses.rating,
			reviews: businesses.review_count,
			url: businesses.url,
			score:
				(businesses.review_count * businesses.rating) /
				(businesses.review_count + 1),
		};
	});
};

const filter = (data, number) => {
	const filtered = data.filter((businesses) => businesses.score <= number);
	return filtered.sort((a, b) => {
		if (a.score > b.score) {
			return 1;
		}
		if (a.score < b.score) {
			return -1;
		}
		return 0;
	});
};

module.exports = {mapper, filter};
