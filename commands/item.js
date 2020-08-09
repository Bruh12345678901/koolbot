var index = require('../users');

var users = index.users;
module.exports = {
	name: 'item',
	description: 'Look at the items in your inventory!',
	execute(msg, args) {
		item(msg)
	},
};
function item(msg){
    var itms = users[msg.author.tag]['items']
    msg.reply(`The items in your inventory are ${itms}`)
  }