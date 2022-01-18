
const { startUpTime, botChID } = require('./settings.js');
const { repeatMsg, startMsg, stopMsg } = require('./bot-phrases.js');
const { sendMsg, dayInterval, randInt } = require('./tools.js');

const startTime = dayInterval(15, 0, 0, 0);
const stopTime = dayInterval(22, 0, 0, 0);

var IDBotInterval = null;


async function onToBot(client) {
    sendMsg(client, botChID, repeatMsg[randInt(repeatMsg.length)]);
}


async function startToBot(client) {
    IDBotInterval = setInterval(onToBot, 3600000, client);
    sendMsg(client, botChID, '@everyone\n' + startMsg[randInt(startMsg.length)]);
}


async function stopToBot(client) {
    clearInterval(IDBotInterval);
    sendMsg(client, botChID, '@everyone\n' + stopMsg[randInt(stopMsg.length)]);
}


async function continuteToBot(client) {
    IDBotInterval = setInterval(onToBot, 3600000, client);
    sendMsg(client, botChID, '@everyone\n' + 'Продолжаем ботать дамы и господа!');
}


function botTime(client) {
    let startUpTimeMs = startUpTime.getHours() * 3600000 +
        startUpTime.getMinutes() * 60000 +
        startUpTime.getSeconds() * 1000 +
        startUpTime.getMilliseconds();
    if (startUpTimeMs > startTime && startUpTimeMs < stopTime) {
        continuteToBot(client);
    } else {
        setTimeout(async () => {
            startToBot(client);
            setInterval(startToBot, 86400000, client);
        }, startTime);
    }

    setTimeout(async () => {
        stopToBot(client);
        setInterval(stopToBot, 86400000, client);
    }, stopTime);
}


module.exports = {
    init: botTime
}

