'use strict';

var loopback = require('loopback');
var LoopBackContext = require('loopback-context');

module.exports = function(Inventry) {
/**
 * Creates a new record in inventry
 * @param {object} data Inventry record details
 * @param {Function(Error, string)} callback
 */


// function getUserRole(userId) {

// 	var query = {
// 		'userId' : userId
// 	}

// 	roleDetail = Role.find(query, function(err, instance){
// 		if(err) throw(err)
// 		console.log(instance)
// 		return instance
// 	});
// }



Inventry.insert = function(data, req, callback) {

// var loggedInUser = req.accessToken.userId

// if(loggedInUser) {

// 	console.log(loggedInUser)

// 	role = getUserRole(loggedInUser)

// }else{
// 	callback("user not logged in ", null)
// }
 
 Inventry.create(data, function(err, instance){

 	if(err) throw(err)

 	callback(null, {
 		"message": "record created succesfully"
 	});

 });
  
};



/**
 * Fetch Inactive records
 * @param {Function(Error)} callback
 */

Inventry.fetch = function(callback) {


	var query = {
		where: {
			'status': "ACTIVE"
		}
	}

	Inventry.find(query, function(err, instance){

		if(err) throw(err)

		var response = {
			"message": "ok",
			"data": instance
		}

		callback(null, response);
	});
};


};






