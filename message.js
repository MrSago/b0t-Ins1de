
/*
    message.js
    dependencies:
        discord-auth.js
        settings.js
*/

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'hello':
            message.channel.send('Greetings, ' + message.author.toString() + '!');
            break;
        case 'test':
            onTimeToBotat();
            break;
        default:
            message.channel.send('Command not found');
            break;
    }
});

