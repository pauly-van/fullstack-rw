const axios = require('axios');
const config = require('../config.js');
const db = require('../database/index.js');

let getReposByUsername = (gitName) => {
  const gitUrl = `https://api.github.com/users/${gitName}`;
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  axios({
    method: 'GET',
    url: gitUrl,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  })
  .then(res=>{
    db.save(res.data)
    console.log('got here!');
  })
  .catch(err=>{
    if(err){
      console.log(err);
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;