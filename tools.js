
/*
    tools.js
    dependencies:
        discord_auth.js
*/

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

