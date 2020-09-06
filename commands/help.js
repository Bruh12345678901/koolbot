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
	var start = "Here are all the commands in the entire program"
	var buy = "-Use this and type what item you want afterwards to purchase it /!buy mia"
	var coinflip = "-Do the command !coinflip, then add heads or tails to choose what you want. Then add another argument to choose how much you want to flip /!coinflip heads 10"
	var gamble = "-Do the command !gamble and add how much you want to gamble /!gamble 10"
	var gift = "-Do !gift and add who you want to gift it to by @'ing them. Add another argument to choose how much you want to gift to them /!gift @blother"
	var helpe = "-The command you're using now /!help"
	var item = "-Use this command to see the items you have /!item"
	var join = "-Use this command to join /!join"
	var leaderboard = "-Use this to check out the leaderboard /!leaderboard"
	var shop = "-Use this to see what's in the shop for purchase /!shop"
	var wallet = "-Use this to see how much money you have /!wallet"
	var work = "-To use this, first do !work, then either start or stop. This will automatically work for you until you do !work stop /!work start"
	var help = `${start} + \n ${buy} + \n ${coinflip} + \n ${gamble} + \n ${gift} + \n ${helpe} + \n ${item} + \n ${join} + \n ${leaderboard} + \n ${shop} + \n ${wallet} + \n ${work} + \n  `
    msg.reply(help)
  }