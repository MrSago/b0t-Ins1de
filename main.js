
require('./index.js');


const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
require('dotenv').config();
client.login(process.env['token']);


require('./activities.js').init(client);
require('./interaction.js').init(client);
require('./reaction-role.js').init(client);
require('./bot-time.js').init(client);


const { logID } = require('./settings.js');
const { updateReact } = require('./reaction-role.js');
const { sendMsg } = require('./tools.js');


client.on('ready', () => {
    updateReact(client);
    sendMsg(client, logID, `${client.user} has restarted!`);
});

