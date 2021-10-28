
const { startUpTime } = require('./settings.js');

function sendMsg(client, id, msg) {
    client.channels.cache.get(id).send(msg);
}

function dayInterval(hours, minutes, seconds, milliseconds) {
    var ms = new Date(startUpTime.getFullYear(), startUpTime.getMonth(), startUpTime.getDate(),
                      hours, minutes, seconds, milliseconds) - startUpTime;
    return ms < 0 ? ms + 86400000 : ms;
}

function randInt(max) {
    return Math.floor(Math.random() * max);
}


module.exports = {
    sendMsg: sendMsg,
    dayInterval: dayInterval,
    randInt: randInt
}

