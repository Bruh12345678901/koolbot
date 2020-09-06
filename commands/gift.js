var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;
module.exports = {
	name: 'gift',
	description: 'Gift a friend some of your money!',
	execute(msg, args) {
		gift(msg,args)
	},
};
function gift(msg,args){
  var bruh1 = parseInt(args[0]);
  var bruh2 = parseInt(args[1]);
  	if (!(msg.author.tag in users)){
		  console.log(users)
		  console.log('dude')
		  msg.reply('You havent joined yet, plz do !join to join')
	  }
    else if (!args.length) { // argument == 0
      return msg.channel.send(`Choose a person to gift to, ${msg.author}!`);
    }
    else if (args[1] == undefined) { // argument == 0
      return msg.channel.send(`Choose an amount to gift, ${msg.author}!`);
    }
    if (!msg.mentions.users.size) {
      return msg.reply('you need to tag a user in order to gift!');
    }
    else if(bruh2 <= users[msg.author.tag]['money']){
      var peple = getUserFromMention(args[0], msg.client);
      console.log(peple.tag)
      users[msg.author.tag]['money'] = users[msg.author.tag]['money'] - bruh2
      users[peple.tag]['money'] = users[[peple.tag]]['money'] + bruh2
      msg.reply(`You gifted  ${args[0]}  $${args[1]}!`)
      updateusers()
    }
    else{
      msg.reply("You don't have enough money to gift that much!")
    }
}
  function getUserFromMention(mention, bot) {
    if (!mention) return;
  
    if (mention.startsWith('<@') && mention.endsWith('>')) {
      mention = mention.slice(2, -1);
  
      if (mention.startsWith('!')) {
        mention = mention.slice(1);
      }
      console.log(bot.users.cache)
      return bot.users.get(mention);
    }
  }
  