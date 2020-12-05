const express = require('express');
const bodyParser = require('body-parser');
const git = require('../helpers/github');
const db = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/repos', function (req, res) {
  git.getReposByUsername(req.body.gitHandle);
  res.status(200).end();
});

app.get('/repos', function (req, res) {
  db.read((repos)=>{
    res.status(200).send(repos);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

