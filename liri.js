var keys = require('./keys.js');

var request = require('request');
var Twitter = require('twitter');


var tweets = keys.twitterKeys;

if (process.argv[3]) {
  var posts = process.argv[3];
}

for (var key in tweets) {

  if (key === posts || posts === undefined) {
    console.log(tweets[key] + " ");
  }
}


// var client = new Twitter({
//   consumer_key: 'vUOC2RWbFO2ru4HJtKYzxlBgA',
//   consumer_secret: 'Ak0aOz11HWZuEjUfo68AXoKGlAYXz2v79XDDNdAWZMu78kv1VX',
//   access_token_key: '2244309641-oT8ceWOACxI9dn0BcE1BWn75CO5RSjnHB5E2HjQ',
//   access_token_secret: 'B9CXxAQbBedCQM9NyksvrtPjM0kUEJE55PdOjIT329fgP'
// })

// var client = new Twitter({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
// });

client.posts('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response){
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
