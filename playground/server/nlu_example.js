const express = require('express')
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const bodyParser = require('body-parser');
const nluCredentials = require('./nluCredentials.json');
const discoveryCredentials = require('./discoveryCredentials.json');
const enviornmentCodes = require('./enviornmentCodes.json');
//const CREDS = require('./credentials.js');
//import App from './../client/src/App.js';

const app = express()
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PORT = process.env.PORT || 4000;

//**********************NLU service*******************************//
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  "username": nluCredentials.NLU.username,
  "password": nluCredentials.NLU.password,
  'version_date': '2017-02-27'
});
//***************************************************************//


//**********************Discovery Service*******************************//
var discovery = new DiscoveryV1({
  username: discoveryCredentials.DISCOVERY.username,
  password: discoveryCredentials.DISCOVERY.password,
  version_date: '2017-06-25'
});
//***************************************************************//

/*app.get('/', function (req, res) {
  console.log(req.query.text);

  const text = req.query.text;

  natural_language_understanding.analyze({
    text: text,
    features: {
      entities: {
        sentiment: true,
        limit: 10
      },

    }
  }, function(err, response) {
    res.json(response)
  })
})*/

app.post('/relations', function(req, res){
  console.log(req.body);      // your JSON
  const text = req.body.text;
  natural_language_understanding.analyze({
    text: text,
    features: {
      relations: {},
      semantic_roles: {},
        // entities: {
        // sentiment: false,
        // limit: 100
      // },
    },
  }, function(err, response) {
    res.json(response)
  })

})

app.post('/relationsurl', function(req, res){
  console.log(req.body);      // your JSON
  const text = req.body.text;
  natural_language_understanding.analyze({
    url: text,
    return_analyzed_text:true,
    features: {
      relations: {},
      metadata: {},
      // semantic_roles: {
      //   limit: 100,
      // },
      // entities: {
      //   limit: 20,
      // },
      // entities: {
      //   sentiment: false,
      //   limit: 100
      // },
    },
  }, function(err, response) {
    res.json(response)
  })

})

app.post('/stories', function(req, res){
  console.log(req.body);      // your JSON
  const text = req.body.text;
  const limit = req.body.limit || 5;
  discovery.query({
    environment_id: enviornmentCodes.ENV.environment_id,
    collection_id: enviornmentCodes.ENV.collection_id,
    return: 'title,enrichedTitle.text,url,host,blekko.chrondate,author,matching_results',
    query: `${text}, language:english`,
    count: limit
  }, function(error, data) {
      if (error) {
        console.error(error);
      } else {
        console.log(JSON.stringify(data, null, 2));
      }
    res.status(200).send(data);
  });

})



app.listen(PORT, function () {
  console.log(`PlainText analyzer app listening on port ${PORT}!`)
  console.log('Running localy...')

})
