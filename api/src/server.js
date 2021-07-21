require('dotenv').config();
const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index.js');
const errors = require('./middlewares/errors.js');

server.use(express.json());
server.use(morgan('dev'));
server.use(
	cors({
		origin: process.env.FRONTEND_URL,
		credentials: true,
		methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
		allowedHeaders: [
			'Origin',
			'X-Requested-With',
			'Content-Type',
			'Accept',
			'Authorization',
		],
	})
);

server.use('/', routes);
server.use(errors);

module.exports = server;
