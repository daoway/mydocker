'use strict';

var express = require('express');

// Constants
var PORT = 8080;

// App
var Redis = require('ioredis');
var redis = new Redis();

var app = express();
app.get('/', function (req, res) {
	redis.set('foo', 'bar');
	redis.get('foo', function (err, result) {
  		console.log(result);
	});

	res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
