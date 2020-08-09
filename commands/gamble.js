var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;
module.exports = {
	name: 'gamble',
	description: 'Use your money to gamble your money!',
	execute(msg, args) {
		gamble(msg, args)
	},
};
function gamble(msg, args){
    var bruh = parseInt(args[0]);
    if (!args.length) { // argument == 0
      return msg.channel.send(`You didn't select an amount to gamble, ${msg.author}!`);
    }
    else if(args[0] >= 1){
      console.log(bruh);
      console.log(users[msg.author.tag]['money'])
      if(bruh <= users[msg.author.tag]['money']){
        var jackpot = Math.floor(Math.random() * 101);
        var potjack = (bruh * 1000);
        if(jackpot >= 99){
          users[msg.author.tag]['money'] = users[msg.author.tag]['money'] + potjack;
          msg.reply("Youve won the JACKPOT!!!!! The money you bet has been multiplied by 1000!!!!")
          var mooola = users[msg.author.tag]['money']
          msg.reply(`Your money is NOW at $${mooola}`);
          updateusers()
        }
        else{
          users[msg.author.tag]['money'] = users[msg.author.tag]['money'] - bruh
          var dud = (bruh * 2) + 1;
          var moneybutbetter = Math.floor(Math.random() * dud)
          users[msg.author.tag]['money'] = users[msg.author.tag]['money'] + moneybutbetter;
          var moola = users[msg.author.tag]['money']
          var arrow = ""
          if(moneybutbetter >= bruh){
            arrow = ":thumbsup:"
          }
          else{
            arrow = ":thumbsdown:"
          }
          msg.reply(`Your money is at $${moola} ${arrow}`);
          updateusers()
        }
        // users[msg.author.tag]['money'] = users[msg.author.tag]['money'] - bruh
        // var dud = (bruh * 2) + 1;
        // users[msg.author.tag]['money'] = users[msg.author.tag]['money'] + Math.floor(Math.random() * dud);
        // var moola = users[msg.author.tag]['money']
        // msg.reply(`Your money is at $${moola}`);
        // var jackpot = Math.floor(Math.random() * 101);
        // var potjack = (bruh * 4);
        // if(jackpot >= 90){
        //   users[msg.author.tag]['money'] = users[msg.author.tag]['money'] + potjack;
        //   msg.reply("Youve won the JACKPOT!!!!! The money you bet has been QUADRUPLED!!!")
        //   var mooola = users[msg.author.tag]['money']
        //   msg.reply(`Your money is NOW at $${mooola}`);
        // }
        // else{
  
        // }
  
      }
      else{
        msg.reply('You dont have enough money!!!! Please choose a valid amount.');
      }
    }
      
    
  }