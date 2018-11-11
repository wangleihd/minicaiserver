'use strict';

module.exports = {
	port: 8001,
	url: 'mongodb:/cai:admin2010@ds159293.mlab.com:59293/minicai',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
	    secure:   false,
	    maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	}
}