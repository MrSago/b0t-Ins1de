
const discord = require('discord.js');

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!'
    },
    {
        name: 'msg',
        description: 'Send bot message to current channel',
        options: [
            {
                name: 'string',
                description: 'String message',
                required: true,
                type: discord.Constants.ApplicationCommandOptionTypes.STRING
            }
        ]
    }
];

const startUpTime = new Date();

const logID = '903019914112167966';


module.exports = {
    commands: commands,
    startUpTime: startUpTime,
    logID: logID
}

