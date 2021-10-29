
const { botChID } = require('./settings.js');
const { repeatMsg, startMsg, stopMsg } = require('./bot-phrases.js');
const { sendMsg, dayInterval, randInt } = require('./tools.js');

const startTime = dayInterval(15, 0, 0, 0);
const stopTime = dayInterval(22, 0, 0, 0);

var IDBotInterval = null;

function onToBot(client) {
    sendMsg(client, botChID, repeatMsg[randInt(repeatMsg.length)]);
}

function startToBot(client) {
    IDBotInterval = setInterval(onToBot, 3600000, client);
    sendMsg(client, botChID, '@everyone\n' + startMsg[randInt(startMsg.length)]);
}

function stopToBot(client) {
    clearInterval(IDBotInterval);
    sendMsg(client, botChID, '@everyone\n' + stopMsg[randInt(stopMsg.length)]);
}


function botTime(client) {
    setTimeout(() => {
        startToBot(client);
        setInterval(startToBot, 86400000, client);
    }, startTime);

    setTimeout(() => {
        stopToBot(client);
        setInterval(stopToBot, 86400000, client);
    }, stopTime);
}


module.exports = {
    init: botTime
}

