const request = require('request');

const getWeather = (lat,lng, callback) => {
	request({
	url: `https://api.darksky.net/forecast/9ce8f7bfb9010096979d85a5c296cb36/${lat},${lng}`,
	json: true
}, (error, response, body) => {
	if (error) {
		callback('Unable to connect to the server');
	} else if (response.statusCode === 400) {
		console.log("Unable to fetch weather!");
	} else if (response.statusCode === 200) {
		callback(undefined, {
			temperature: body.currently.temperature,
			apparentTemperature: body.currently.apparentTemperature
		});
	}
})
};

module.exports.getWeather = getWeather;
