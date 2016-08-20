// Declare our dependencies
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var request = require('superagent');
// Create our express app
var app     = express();

// Set the view engine to scrape and set the default views directory

app.get('/scrape', function(req, res){

  //All the web scraping magic will happen here!!
   url = 'http://www.metvuw.com/forecast/forecast.php?type=rain&region=nzsi&noofdays=7';
})
// The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

request(url, function(error, response, html){
  // First we'll check to make sure no errors occurred when making the request

          if(!error){
              // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

              var $ = cheerio.load(html);

              // Finally, we'll define the variables we're going to capture

              var img,
              var json = { img : ""};
          }
      })
  })

app.set('/views')


app.get ('/' , function (req,res){
  res.send('<img src = "http://nme.assets.ipccdn.co.uk/images/081022_114642_TheCure03.article_x4.jpg">','<img src = "http://rocksubculture.com/wp-content/uploads/2016/05/The-Cure-2016-Tour-Concert-Review-Shoreline-Amphitheatre-Live-Photos-FI-1.jpg">')
})

//var PORT = process.env.PORT || 3000

//app.listen(PORT, function(){
 //console.log('Whatever!', PORT)
//})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;
