var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;
var items = {
  tshirt:25,
  applebutter:500,
  mia:0,
  butterapple:500,
  salmon:50,
  jonesy:1000000,
  Kevin: 1
}
module.exports = {
	name: 'leaderboard',
	description: 'Check out where you are on the leaderboard',
	execute(msg, args) {
		leaderboard(msg)
	},
};

function leaderboard(msg){
    console.log(Object.values(users))
    console.log(Object.keys(users))
    var keys = Object.keys(users)
    var boardleader = "***Leaderboard :dollar: ***"
    for (var i = 0; i < keys.length; i++ ){
        boardleader += `\n|| ${keys[i]} has **$${users[keys[i]]["money"]}**||`


    }
    msg.channel.send(`${boardleader}`)
    console.log(boardleader)
}