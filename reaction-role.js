
const { rulesID, rolesID } = require('./settings.js');


function updateReact(client) {
    client.channels.cache
        .get(rulesID['ch'])
            .messages.fetch(rulesID['msg'][0])
                .then(message => {
                    message.react('✅');
                });
}


function reactionRole(client) {
    client.on('messageReactionAdd', async (reaction, user) => {
        try {
            if (reaction.message.partial) {
                await reaction.message.fetch();
            }
            if (reaction.partial) {
                await reaction.fetch();
            }
        } catch (error) {
            client.error(`Something went wrong when fetching the message:${error}`);
            return;
        }
        if (user.bot) {
            return;
        }

        try {
            if (reaction.message.id === rulesID['msg'][0]) {
                if (reaction.emoji.name === '✅') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(rolesID['default']);
                } else {
                    await reaction.remove();
                }
            } else

            if (reaction.message.id === rulesID['msg'][1]) {
                await reaction.remove();
            }
        } catch (error) {
            console.error(error);
        }
    });

    client.on('messageReactionRemove', async (reaction, user) => {
        try {
            if (reaction.message.partial) {
                await reaction.message.fetch();
            }
            if (reaction.partial) {
                await reaction.fetch();
            }
        } catch (error) {
            client.error(`Something went wrong when fetching the message:${error}`);
            return;
        }
        if (user.bot) {
            return;
        }

        try {
            if (reaction.message.id === rulesID['msg'][0]) {
                if (reaction.emoji.name === '✅') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rolesID['default']);
                } else {
                    await reaction.remove();
                }
            }
        } catch (error) {
            console.error(error);
        }
    });
}


module.exports = {
    init: reactionRole,
    updateReact: updateReact
}

