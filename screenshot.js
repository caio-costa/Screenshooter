var fs 			= require('fs');
var async 		= require('async');
var webshot 	= require('webshot');
var progress 	= require('progress');
var urls 		= require('./pages.json');
var chalk       = require('chalk');

console.log(chalk.green(' STARTED!'), '\n')
console.log(chalk.cyan(' Capturing screenshots...'))

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

const bar = new progress(chalk.cyan(' PROGRESS: [ :bar ] - FILES: :current/:total - TIME: :elapseds'), {
	complete: '■',
	incomplete: '□',
	width: Object.keys(urls).length*2,
	total: Object.keys(urls).length,
	callback: () => {
		console.log('\n', chalk.green('COMPLETED!'))
		console.log(chalk.green(" Files saved to \'prints\/" + timestamp + "\/\'"), '\n')
	}
})

fs.stat('prints', (error, stat) => {
	if(error) fs.mkdirSync('prints');
	fs.mkdir('prints/' + timestamp, () => {
		async.forEachOf(urls, (value, key, cb ) => {
			webshot(value, './prints/' + timestamp + '/' + key + '.jpeg', options, (err) => {
		
					if(err) console.log(err);
					cb();
					bar.tick();
			});
		}, err => {
			if(err) console.log(err);
		})
	});
})