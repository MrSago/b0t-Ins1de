
/*
    bot-time.js
    dependencies:
        tools.js
        bot-phrases.js
*/

const botID = '901511829958844448';
const startBotTime = getDayInterval(15, 0, 0, 0);
const stopBotTime = getDayInterval(22, 0, 0, 0);


var IDBotInterval = null;


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

