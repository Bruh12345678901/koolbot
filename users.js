const fs = require('fs');
var rawdata = fs.readFileSync('users.json');
var users = JSON.parse(rawdata);
exports.users = users;
console.log(users);


function updateusers(){
    var data = JSON.stringify(users);
    fs.writeFileSync('users.json', data);
  }
  exports.updateusers = updateusers;

  var items = {
    tshirt:25,
    applebutter:500,
    mia:0,
    butterapple:500,
    salmon:50,
    jonesy:1000000,
    Kevin: 1
  }

exports.items = items;
