const request = require('request');

const geocodeAddress = (address, callback) => {

	const encodedAddress = encodeURIComponent(address);

	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDepK3wyCVBUqbE2_zCeHqCK4JWcvIM4SM`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback(`Unable to connect to the google server`);
		}
		else if (body.status === 'ZERO_RESULTS') {
			callback(`Unable to find address. Please check the address`);
		} else if (body.status === 'OK'){
			callback(undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			})
		}
	})

}


module.exports.geocodeAddress = geocodeAddress; 
