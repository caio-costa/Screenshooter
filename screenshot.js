var webshot = require('webshot');
var urls = require('./pages.json');
var fs = require('fs');

var pageWidth = 1366, pageHeight = 768,
renderTime = 1000, imageQuality = 100;

var date = new Date()
var timestamp = date.getFullYear() + ("0" + date.getMonth()).substr(-2)
	+ ("0" + (date.getDate() + 1)).substr(-2) + ("0" + date.getHours()).substr(-2)
	+ ("0" + date.getMinutes()).substr(-2) + ("0" + date.getSeconds()).substr(-2);

var options = {
	screenSize: {
		width: pageWidth,
		height: pageHeight
	},
	renderDelay: renderTime,
	quality: imageQuality
}

fs.mkdirSync(timestamp);

Object.keys(urls).map( key => {
	webshot(urls[key], './' + timestamp + '/' + key + '.jpeg', 
		options, function(err) {
			if(err) console.log(err)
	});
})