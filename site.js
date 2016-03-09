const path = require('path');
const express = require('express');

const staticSiteOptions = {
	portnum: 1337,
	maxAge: 1000 * 60 * 15
};

express().use(express.static(
	path.join(__dirname, 'static'),
	staticSiteOptions
	)).listen(staticSiteOptions.portnum);
console.log( 'Listening on port ' + staticSiteOptions.portnum );