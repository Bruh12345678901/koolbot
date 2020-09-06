var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;
var items = index.items;
module.exports = {
	name: 'shop',
	description: 'See whats in the shop!',
	execute(msg, args) {
		shop(msg)
	},
};
function shop(msg){
    var txt = ''
    for (x in items) {
      txt += x + ": " + index.items[x]["cost"] + "\n"
    }
    msg.reply(`The items in the shop today are :${txt}`)
  }