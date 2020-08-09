var index = require('../users');

var users = index.users;


module.exports = {
	name: 'join',
	description: 'JOIN',
	execute(msg, args) {
		join(msg)
	},
};
function join(msg){
    if (msg.author.tag in users){
      console.log(users)
      console.log('dude')
      msg.reply('you are already a member of the best rewards club ever')
    }
    else{
      users[msg.author.tag] = { 
        money: 0,
        items: [],
        worktime: null
       }
       updateusers()
      console.log(users)
      msg.reply('You joined the Jones Rewards Club for very cheap clothing!')
    }
  }