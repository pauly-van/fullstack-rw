const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  handle: String,
  url: String,
  owner: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  console.log(repo);
  let rep = new Repo({
    id: repo.id,
    handle: repo.login,
    url: repo.url,
    owner: repo.name
  })
  rep.save((err)=>{
    if(err) {
      console.log(err);
    }else{
      console.log('Success!');
    }
  })
}

const read = (cb) =>{
  Repo.find((err, repos)=>{
    if(err)throw new Error;
    cb(repos);
  });
};

module.exports.save = save;
module.exports.read = read;