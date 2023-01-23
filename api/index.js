const server = require('./src/server.js');
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
	console.log('Listening at', PORT);
});
