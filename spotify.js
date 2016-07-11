var spotify = require('spotify');
 
spotify.search({ 
  type: 'artist OR album OR track', 
  query: 'My search query' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    
});