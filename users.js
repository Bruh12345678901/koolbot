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
    tshirt:{
      name: "tshirt",
      cost: 25,
      image: "https://contestimg.wish.com/api/webimage/5d8b96fc46a5b30d4bf5e334-large.jpg?cache_buster=f6e9c055ac41751fbe45e82ca228df1d"
    },
    applebutter:{
      name: "applebutter",
      cost: 500,
      image: "https://www.eastofedencooking.com/wp-content/uploads/2014/03/MaxtheCat2_8504.jpg"
    },
    mia:{
      name:"mia",
      cost: 0,
      image: "https://i.pinimg.com/236x/f4/b7/c4/f4b7c44863b0e6cc3b273481cd7bf284.jpg"
    },
    butterapple:{
      name:"butterapple",
      cost: 200,
      image: "https://i.imgur.com/8clFw0e_d.webp?maxwidth=728&fidelity=grand"
    },
    salmon:{
      name:"salmon",
      cost: 50,
      image: "https://www.onceuponachef.com/images/2018/02/pan-seared-salmon-.jpg"
    },
    jonesy:{
      name:"jonesy",
      cost: 1000000,
      image: "https://www.peta.org/wp-content/uploads/2016/09/gold-fish-sad-602x382.jpg"
    },
    Kevin:{
      name:"Kevin",
      cost: 1,
      image: "https://external-lax3-1.xx.fbcdn.net/safe_image.php?d=AQD1CBJ0BZKoF3TW&w=540&h=282&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FOi-JFsBNrfY%2Fmaxresdefault.jpg&cfs=1&upscale=1&fallback=news_d_placeholder_publisher&_nc_cb=1&_nc_hash=AQBVOLmZJITSisZp"
    }
  }

exports.items = items;
