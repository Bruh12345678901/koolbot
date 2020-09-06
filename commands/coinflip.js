var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;
module.exports = {
	name: 'coinflip',
	description: 'Flip a coin',
	execute(msg, args) {
		coinflip(msg, args)
	},
};
function coinflip(msg, args){
    console.log("you got here!!!!")
    var bruh1 = parseInt(args[0]);
    var bruh2 = parseInt(args[1]);
    if (!(msg.author.tag in users)){
		console.log(users)
		console.log('dude')
		msg.reply('You havent joined yet, plz do !join to join')
    }
    else if(bruh2 <= 0){
        msg.reply('Please choose an amount above 0');
    }
    else if (!args.length) { // argument == 0
        return msg.channel.send(`You didn't choose heads or tails, ${msg.author}!`);
        console.log("you got here1")
      }
    else{
        console.log("you got here2")
        var heads = "heads"
        var tails = "tails"
        var coin = Math.floor(Math.random() * 2);
        console.log(coin)
        var win = bruh2*2
        var mooola = users[msg.author.tag]['money']
        if(bruh2 <= users[msg.author.tag]['money']){
            if (args[0] == heads){
                console.log("you got here3")
                if (coin == 0){
                    users[msg.author.tag]['money'] = users[msg.author.tag]['money'] + win;
                    msg.reply("Youve won the JACKPOT!!!!! The money you bet has been multiplied by 2!!!!")
                    msg.reply(`Your money is NOW at $${mooola}`);
                    updateusers()
                }
                else{
                    console.log("you got here4")
                    users[msg.author.tag]['money'] = users[msg.author.tag]['money'] - bruh2;
                    msg.reply("You lost all your money! Better luck next time!")
                    msg.reply(`Your money is NOW at $${mooola}`);
                    updateusers()
                }
            }
            else if(args[0] == tails){
                console.log("you got here5")
                if (coin == 1){
                    console.log("you got here6")
                    users[msg.author.tag]['money'] = users[msg.author.tag]['money'] + win;
                    msg.reply("Youve won the JACKPOT!!!!! The money you bet has been multiplied by 2!!!!")
                    msg.reply(`Your money is NOW at $${mooola}`);
                    updateusers()
                }
                else{
                    console.log("you got here7")
                    users[msg.author.tag]['money'] = users[msg.author.tag]['money'] - bruh2;
                    msg.reply("You lost all your money! Better luck next time!")
                    msg.reply(`Your money is NOW at $${mooola}`);
                    updateusers()
                }
            }
            else{
                console.log("you got here8")
                msg.reply("Please choose heads or tails not whatever you put")
            } 
        }
        else{
            msg.reply("You dont have enough money!!!!")
        }
    }
}