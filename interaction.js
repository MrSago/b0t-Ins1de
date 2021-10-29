
const { sendMsg } = require('./tools.js');
const { commands } = require('./settings.js');


function interaction(client) {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;

        const { commandName, options } = interaction;

        try {
            if (commandName === commands[0].name) {
                await interaction.reply('Pong!');
            } else

            if (commandName === commands[1].name) {
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
}


module.exports = {
    init: interaction
}

