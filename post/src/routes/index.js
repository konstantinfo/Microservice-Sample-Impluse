const _ = require('lodash');

// postData prints post data as a string on the webpage
exports.postData = function (req, res, next) {
	const params = _.extend(req.query || {}, req.params || {}, req.body || {});
	//if no parameters are supplied	
	if(_.isEmpty(params)){
		return res.json(404,{
    		message: DM.NO_PARAMS_FOUND
  		});
	}
	var paramsString = "";
	_.forEach(params, function(value, key) {
	  paramsString += key + ":" + value + ", ";
	});
	
	//removes , from the end of the paramsString
	paramsString = paramsString.slice(0, -2);
	return res.json({
		message: paramsString
	});
}