var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;
var items = index.items;
module.exports = {
	name: 'buy',
	description: 'Buy an item from the shop',
	execute(msg, args) {
		buy(args, msg)
	},
};

function buy(args, msg){
    if (!(msg.author.tag in users)){
		  console.log(users)
		  console.log('dude')
		  msg.reply('You havent joined yet, plz do !join to join')
	  }
    else if (!args.length) { // argument == 0
      return msg.channel.send(`You didn't choose an item to buy, ${message.author}!`);
    }
    else{
      if (args[0] in items){
        console.log(items[args[0]])
        console.log(items[args[0]]["cost"])
        if (args[0] in users[msg.author.tag]['items']){
          msg.reply("you already have this item!!!")
        }
        else if(items[args[0]]["cost"] <= users[msg.author.tag]['money']){
          users[msg.author.tag]['items'][args[0]] = items[args[0]]
          console.log(args[0])
          console.log(users[msg.author.tag]['items'])
          users[msg.author.tag]['money'] = users[msg.author.tag]['money'] - items[args[0]]["cost"]
          msg.reply(`You successfully bought ${args[0]}!`)
          updateusers()
        }
        else{
          msg.reply(`You don't have enough money to purchase this item. Please choose a cheaper item or work some more!`)
        }
      }
      else{
        msg.reply('Please choose a valid item!')
      }
  
    }
  }