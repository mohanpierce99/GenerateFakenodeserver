const request=require('request');

request('https://api.darksky.net/forecast/9b4d1f1d967fd23ce653a6dbe53f6a25/37.8267,-122.4233')
.pipe(process.stdout);