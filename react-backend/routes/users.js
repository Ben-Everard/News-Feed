var express = require("express");
var router = express.Router();
const request = require("request");

/* GET users listing. */
router.get("/", function(req, res, next) {
  // res.send('respond with a resource');
  // Dont forget to update API key
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey={Add Api Key}";
  request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    if (json.status === "ok") {
      res.json(json.articles);
    } else {
      console.log(error);
    }
  });
});

module.exports = router;
