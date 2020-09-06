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
	if (!(msg.author.tag in users)){
		console.log(users)
		console.log('dude')
		msg.reply('You havent joined yet, plz do !join to join')
	  }
	else if(users[msg.author.tag]['items'].length < 1){
		msg.reply(`lol u have no items`)
	}
	else
	//make this work with the dictionary plz
	{
		var itms = users[msg.author.tag]['items']
		msg.reply(`The items in your inventory are ${itms}`)
	}  

  }