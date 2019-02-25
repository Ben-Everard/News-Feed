var express = require("express");
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");

/* GET home page. */
router.get("/url", function(req, res, next) {
  let url =
    "https://www.nbcnews.com/tech/tech-news/facebook-living-breathing-crime-scene-says-one-former-manager-n837991";
  request(url, function(error, response, html) {
    // First we'll check to make sure no errors occurred when making the request

    if (!error) {
      // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
      var $ = cheerio.load(html);
      var pText = $("p").text();

      // Finally, we'll define the variables we're going to capture
      res.json({
        text: pText
      });
    }
  });
});

module.exports = router;
