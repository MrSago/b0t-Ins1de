
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NjI0MzUwMjI0MzM2NTUxOTU2.XYPtdQ.hQ-muvO7Ri8h0Di9RJR4q08cTNQ');

const prefix = '!bot ';


client.once('ready', () => {
    const logChannel = client.channels.cache.get('831057321219850260');
    logChannel.send('b0t Ins1de restarted!');
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


function getDayInterval(hours, minutes, seconds, milliseconds) {
    var now = new Date();
    var ms = new Date(now.getFullYear(), now.getMonth(), now.getDate(),
                                hours, minutes, seconds, milliseconds) - now;
    return ms < 0 ? ms + 86400000 : ms;
}

var idBotInterval = null;
const botChanel = client.channels.cache.get('901511829958844448');

function onTimeToBotat() {
    botChanel.send('Ботай глупый дурачок!');
}

function startTimeToBotat() {
    botChanel.send('Начинаем ботать дамы и господа! Бот внутри нас © b0t Ins1ide.');
    idBotInterval = setInterval(onTimeToBotat, 3600000);
}

function stopTimeToBotat() {
    botChanel.send('Заканичиваем ботать и начинаем чиллить!');
    clearInterval(idBotInterval);
}

setTimeout(() => {
    startTimeToBotat();
    setInterval(startTimeToBotat, 86400000);
}, getDayInterval(15, 0, 0, 0));

setTimeout(() => {
    stopTimeToBotat();
    setInterval(stopTimeToBotat, 86400000 - 1000);
}, getDayInterval(22, 0, 0, 0) - 1000);

