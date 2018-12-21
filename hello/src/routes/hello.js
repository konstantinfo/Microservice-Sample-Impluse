// sayHello prints Hello on the webpage
exports.sayHello = function (req, res, next) {
	return res.json({
		message: 'Hello'
	});
}