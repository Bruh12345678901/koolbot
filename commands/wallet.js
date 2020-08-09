var index = require('../users');

var users = index.users;
module.exports = {
	name: 'wallet',
	description: 'Check how muchs in your wallet!',
	execute(msg, args) {
		wallet(msg)
	},
};
function wallet(msg){
    var moola = users[msg.author.tag]['money']
    msg.reply(`Your money is at $${moola}`)
  }