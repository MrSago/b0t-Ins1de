
require('./index.js');

require('dotenv').config();
const token = process.env['token'];

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.login(token);


const { sendMsg } = require('./tools.js');
const { logID } = require('./settings.js');


client.on('ready', () => {
    sendMsg(client, logID, `${client.user} has restarted!`);
});


client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    try {
        if (commandName === 'ping') {
            await interaction.reply('Pong!');
        } else if (commandName === 'msg') {
            let args = options._hoistedOptions;
            if (args[0] != null &&
                sendMsg(client, interaction.channelId, args[0].value)) {
                await interaction.reply({ content: 'Success!', ephemeral: true });
            } else {
                await interaction.reply({ content: 'Fail!', ephemeral: true });
            }
        }
    } catch (error) {
        console.error(error);
    }
});


require('./bot-time.js').bot_time(client);

