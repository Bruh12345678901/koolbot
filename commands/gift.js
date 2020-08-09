var index = require('../users');

var users = index.users;
module.exports = {
	name: 'gift',
	description: 'Gift a friend some of your money!',
	execute(msg, args) {
		gift(msg,args)
	},
};
function gift(msg,args){
    if (!args.length === 2) { // argument == 0
      return msg.channel.send(`Choose a person to gift to, ${message.author}!`);
    }
    else{
      var peple = getUserFromMention(args[0]);
      console.log(peple.tag)
      users[msg.author.tag]['money'] = users[msg.author.tag]['money'] - args[1]
      users[peple.tag]['money'] = users[[peple.tag]]['money'] + args[1]
      msg.reply(`You gifted  ${args[0]}  $${args[1]}!`)
      updateusers()
    }
  }