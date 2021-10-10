
const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NjI0MzUwMjI0MzM2NTUxOTU2.XYPtdQ.2XRMipvEMTJzDn6aAWmilNTBiLg');


const prefix = '!bot ';

client.once('ready', () => {
	console.log('Success!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) {
			return;
	}

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	switch (command) {
		case 'sosi':
			message.channel.send('sam sosi');
			break;
		case 'name':
			message.channel.send(message.author.tag);
			break;
		case 'maks':
			message.channel.send('loh kakoyto');
			break;
		default:
			message.channel.send('net takoy command dolbaeb');
			break;
	}
});


