require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const { getDiffieHellman } = require('crypto');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
bot.commands = new Discord.Collection();
bot.login(TOKEN);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});




// var rawdata = fs.readFileSync('users.json');
// var users = JSON.parse(rawdata);
// exports.users = users;
// console.log(users);

var items = {
  tshirt:25,
  applebutter:500,
  mia:0,
  butterapple:500,
  salmon:50,
  jonesy:1000000,
  Kevin: 1
}

var prefix = '!'

// MAIN AREA
bot.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  console.log(args)
  console.log(command)

  if (!bot.commands.has(command)) return;


  try {
	  bot.commands.get(command).execute(msg, args);
  } catch (error) {
	  console.error(error);
	  msg.reply('there was an error trying to execute that command!');
  } 

  // if (command === 'kevin') {
  //   kevin(msg)
  // } 
  // else if (command === 'help'){
  //   help(msg)
  // }
  // else if (command === 'join') {
  //   join(msg)
  // }else if(!(msg.author.tag in users)){
  //   msg.reply("You haven't joined yet")
  //   return
  // }
  // else if (command === 'wallet'){
  //   wallet(msg)
  // }
  // else if (command === 'work'){
  //   work(msg)
  // }
  // else if (command === 'shop'){
  //   shop(msg)
  // }
  // else if (command === 'buy'){
  //   buy(args,msg)
  // }
  // else if(command === 'item'){
  //   item(msg)
  // }
  // else if (command === 'gamble'){
  //   gamble(msg, args)
  // }
  // else if (command === 'gift'){
  //   gift(msg, args)
  // }
});

//functions

function updateusers(){
  var data = JSON.stringify(users);
  fs.writeFileSync('users.json', data);
}

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

function help(msg){
  msg.reply('The commands are !help, !buy, !wallet, !join, !shop, !work')
}

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



function item(msg){
  var itms = users[msg.author.tag]['items']
  msg.reply(`The items in your inventory are ${itms}`)
}

function shop(msg){
  var txt = ''
  for (x in items) {
    txt += x + ": " + items[x] + "\n"
  }
  msg.reply(`The items in the shop today are :${txt}`)
}

function work(msg){
  if (msg.author.tag in users){
    moneymoney = Math.floor(Math.random() * 11);
    users[msg.author.tag]['money'] = moneymoney + users[msg.author.tag]['money'];
    msg.reply(`You've gained $${moneymoney}!`)
    updateusers()
  }
  else{
    msg.reply('you haven\'t joined yet!!')
  }
}

function wallet(msg){
  var moola = users[msg.author.tag]['money']
  msg.reply(`Your money is at $${moola}`)
}

function join(msg){
  if (msg.author.tag in users){
    console.log(users)
    console.log('dude')
    msg.reply('you are already a member of the best rewards club ever')
  }
  else{
    users[msg.author.tag] = { 
      money: 0,
      items: []
     }
     updateusers()
    console.log(users)
    msg.reply('You joined the Jones Rewards Club for very cheap clothing!')
  }
}
function kevin(msg){
  msg.reply('jones');
  msg.reply(msg.author.avatarURL);
  msg.channel.send('jones');
}
//check args length correct
//if you have enough money to gamble
//get random number for jackpot
//if number is in jackpot range, give jackpot
//if number is below jackpot range, do regular gamble
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
function getUserFromMention(mention) {
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