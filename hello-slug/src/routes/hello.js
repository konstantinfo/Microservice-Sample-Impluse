const _ = require('lodash');

//sayHello prints title as Hello on the webpage
exports.sayHelloSlug = function (req, res, next) {
	const params = _.extend(req.query || {}, req.params || {}, req.body || {});
	return res.json({
    	message: 'Hello ' + params.slug
  	});
}