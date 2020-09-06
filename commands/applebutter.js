var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;
module.exports = {
	name: 'applebutter',
	description: 'applebutter123',
	execute(msg, args) {
		applebutter(msg, args)
	},
};

function applebutter(msg,args){
    msg.channel.sendMessage({embed: {
        color: 3447003,
        description: "bruh123",
        image: {url: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48275700/1/?bust=1592673703&width=300"}
    }});
}