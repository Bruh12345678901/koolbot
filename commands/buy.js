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
	name: 'buy',
	description: 'Buy an item from the shop',
	execute(msg, args) {
		buy(args, msg)
	},
};

function buy(args, msg){
    if (!args.length) { // argument == 0
      return msg.channel.send(`You didn't choose an item to buy, ${message.author}!`);
    }
    else{
      if (args[0] in items){
        console.log(items[args[0]])
        if(items[args[0]] <= users[msg.author.tag]['money']){
          users[msg.author.tag]['items'].push(args[0])
          console.log(args[0])
          console.log(users[msg.author.tag]['items'])
          users[msg.author.tag]['money'] = users[msg.author.tag]['money'] - items[args[0]]
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