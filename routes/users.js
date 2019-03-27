var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* POST users listing. */
router.post('/:name', function(req, res, next) {
  console.log(req.body);

  res.json({
    'user_id': req.body.user_id,
    'bot_id': req.body.bot_id,
    'module_id': req.body.module_id,
    'message': "Let me have a look for your profile in the database...",
    "cards": [
      {
          "type": "text",
          "value": "Is your name '"+req.body.name+"'?",
          "buttons": [
            {
              "type": "module",
              "value": "755348",
              "name": "Yes"
            },
            {
              "type": "module",
              "value": "755208",
              "name": "No"
              }
          ]
      }
    ],
    "nameApi": "Theo Test"
  });
});

/* POST users location listing. */
router.post('/:name/location', function(req, res, next) {
  console.log(req.body);

  res.json({
    'user_id': req.body.user_id,
    'bot_id': req.body.bot_id,
    'module_id': req.body.module_id,
    'message': "Let me look for your location on the map...",
    "cards": [
      {
          "type": "text",
          "value": "Is your location: London, UK ?",
          "buttons": [
            {
              "type": "module",
              "value": "757066",
              "name": "Yes"
            },
            {
              "type": "module",
              "value": "757065",
              "name": "No"
              }
          ]
      }
    ],
    "nameApi": "Theo Test"
  });
});

module.exports = router;
