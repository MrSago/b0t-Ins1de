
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

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});


require('./bot-time.js').bot_time(client);

