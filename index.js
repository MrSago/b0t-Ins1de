
require('dotenv').config();
const token = process.env['token'];
const client_id = process.env['client_id'];
const guild_id = process.env['guild_id'];

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const rest = new REST({ version: '9' }).setToken(token);

const { commands } = require('./settings.js');


(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(client_id, guild_id),
            { body: commands },
        );
    } catch (error) {
        console.error(error);
    }
})();

