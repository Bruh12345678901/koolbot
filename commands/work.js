var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;
module.exports = {
	name: 'work',
	description: 'Work to gain money!',
	execute(msg, args) {
		work(msg, args)
	},
};



function work(msg, args){
    if (!(msg.author.tag in users)){
		  console.log(users)
		  console.log('dude')
		  msg.reply('You havent joined yet, plz do !join to join')
	  }
    else if (!args.length) { // argument == 0
        return msg.channel.send(`You didn't choose whether to start or stop working, ${msg.author}!`);
      }
    else if (args[0] == 'start'){
        users[msg.author.tag]['worktime'] = Date.now()
        console.log(users[msg.author.tag]['worktime'])
        updateusers()
        msg.channel.send(`You started working, ${msg.author}!`)
    }
    else if (args[0] == 'stop'){
        var stop = Date.now()
        var elapsed = stop - users[msg.author.tag]['worktime']
        console.log(stop)
        console.log(`Elapsed time: ${ elapsed } milliseconds`)
        users[msg.author.tag]['worktime'] = stop
        updateusers()
        var secmoney = elapsed / 1000
        var minmoney = secmoney / 60
        var hourmoney = minmoney / 60
        if (elapsed >= 300000){
          msg.reply("You worked so hard and well you angered kevin the owner. So now you lost all your money")
        }
        else if(elapsed >= 600000){
          msg.reply("You died. No life insurance so no money. This means your wallet is now halved")
          users[msg.author.tag]['money'] = users[msg.author.tag]['money'] - users[msg.author.tag]['money']/2
        }
        else{
          users[msg.author.tag]['money'] = users[msg.author.tag]['money'] + secmoney
          msg.channel.send(`You stopped working, worked for a total of ${ secmoney } seconds, and gained a total of $${ secmoney } ${msg.author}!`)
        }
    }
    else{
      msg.reply('Please choose !work start or !work stop')
    }
    // if (msg.author.tag in users){
    //     users[msg.author.tag]['worktime'] = timestamp
    //     console.log(timestamp)
    //     updateusers()
    // //   moneymoney = Math.floor(Math.random() * 11);
    // //   users[msg.author.tag]['money'] = moneymoney + users[msg.author.tag]['money'];
    // //   msg.reply(`You've gained $${moneymoney}!`)
    // //   updateusers()
    // }
    // else{
    //   msg.reply('you haven\'t joined yet!!')
    // }
  }