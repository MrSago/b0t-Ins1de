
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NjI0MzUwMjI0MzM2NTUxOTU2.XYPtdQ.hQ-muvO7Ri8h0Di9RJR4q08cTNQ');

const startUpTime = new Date();
const prefix = '!bot ';
const logID = '637661014351020052';

const botID = '901511829958844448';
const startBotTime = getDayInterval(15, 0, 0, 0);
const stopBotTime = getDayInterval(22, 0, 0, 0);

function sendMsg(id, msg) {
    client.channels.cache.get(id).send(msg);
}

function getDayInterval(hours, minutes, seconds, milliseconds) {
    var ms = new Date(startUpTime.getFullYear(), startUpTime.getMonth(), startUpTime.getDate(),
                      hours, minutes, seconds, milliseconds) - startUpTime;
    return ms < 0 ? ms + 86400000 : ms;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


client.once('ready', () => {
    sendMsg(logID, 'b0t Ins1de restarted!');
});


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


var IDBotInterval = null;
const onBotMsg = [
    'Ботай, глупый дурачок!',
    'Мы уже ботаем, ты с нами?',
    'Еще не начал ботать? Присоединяйся!',
    'Бот как смысл жизни.',
    'Без бота не выловишь и автомат по матану.',
    'Работа не волк, волк это ходить, работа это бот!',
    'Опять ботать?',
    'Нужно больше бота!',
    'Бот за Нер\'Зула!',
    'Я поклялся ботать Нер\'Зулу!',
    'Ботай во славу Плети!',
    'Ботай, ботай, пирожок.',
];
const startBotMsg = [
    'Начинаем ботать дамы и господа! Бот внутри нас! © b0t Ins1ide.',
    'Проведи этот день настолько продуктивно, чтобы сам Илон Маск позавидовал!',
    'Приготовь кофе и начинай ботать вместе с нами!',
    'Да, дружочек, наконец-то пришел новый день и можно продолжать становится лучше!'
];
const stopBotMsg = [
    'Заканичиваем ботать и начинаем чиллить!',
    'Бот подходит к концу, надеюсь все провели этот день продуктивно!',
    'Отлично, ты заслужил этот отдых!',
    'Красавчик, выпей чаю и посмотри сериальчик!',
    'На сегодня всё! Не забывай отдыхать и набираться сил, завтра еще поботаешь!'
];

function onTimeToBotat() {
    sendMsg(botID, onBotMsg[getRandomInt(onBotMsg.length)]);
}

function startTimeToBotat() {
    IDBotInterval = setInterval(onTimeToBotat, 3600000);
    sendMsg(botID, '@everyone\n' + startBotMsg[getRandomInt(startBotMsg.length)]);
}

function stopTimeToBotat() {
    clearInterval(IDBotInterval);
    sendMsg(botID, '@everyone\n' + stopBotMsg[getRandomInt(stopBotMsg.length)]);
}

setTimeout(() => {
    startTimeToBotat();
    setInterval(startTimeToBotat, 86400000);
}, startBotTime);

setTimeout(() => {
    stopTimeToBotat();
    setInterval(stopTimeToBotat, 86400000);
}, stopBotTime);

