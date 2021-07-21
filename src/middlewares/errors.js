const boom = require('@hapi/boom');

const errorHandler = (err, req, res, next) => {
	const bomifyError = boom.boomify(err);
	const {
		output: {statusCode, payload},
	} = bomifyError;
	res
		.status(statusCode)
		.send({response: payload.error, message: payload.message});
};

module.exports = errorHandler;
