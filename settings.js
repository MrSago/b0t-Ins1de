
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

const rulesID = {
    ch: '650230796518555651',
    msg: [
        '903735242513350716',
        '903736209019375686'
    ]
};

const rolesID = {
    default: '903012753214689320'
};


module.exports = {
    commands: commands,
    startUpTime: startUpTime,
    logID: logID,
    rulesID: rulesID,
    rolesID: rolesID
}

