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
});

//functions

function updateusers(){
  var data = JSON.stringify(users);
  fs.writeFileSync('users.json', data);
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