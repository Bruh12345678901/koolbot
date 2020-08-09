var index = require('../users');

var users = index.users;
module.exports = {
	name: 'help',
	description: 'GET HELP',
	execute(msg, args) {
		help(msg)
	},
};
function help(msg){
    msg.reply('The commands are !help, !buy, !wallet, !join, !shop, !work')
  }