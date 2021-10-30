
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

const logChID = '903019914112167966';

const botChID = '901511829958844448';

const emojiID = {
    rules: {
        ch: '650230796518555651',
        msg: '904113451192975360'
    },

    roles: {
        ch: '650230852919230467',
        msg: '904114763808788541'
    }
};

const rolesID = {
    '✅': '903012753214689320',
    '📚': '904065506401738782',
    '💻': '903018837195227177',
    '🎮': '903980230518145064',
    '🎨': '903980724045119508',
    '📈': '903980633301340180',
    '🎞️': '903979280017522699',
    '🌈': '903978910134468639',
    '⚽': '903981325999046716'
};


module.exports = {
    commands: commands,
    startUpTime: startUpTime,
    botChID: botChID,
    logID: logChID,
    emojiID: emojiID,
    rolesID: rolesID
}

