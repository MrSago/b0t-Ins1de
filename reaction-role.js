
const { emojiID, rolesID } = require('./settings.js');


function updateReact(client) {
    try {
    let chs = client.channels.cache;

    chs.get(emojiID['rules']['ch'])
        .messages.fetch(emojiID['rules']['msg'])
            .then(message => {
                message.react('✅');
            });

    chs.get(emojiID['roles']['ch'])
        .messages.fetch(emojiID['roles']['msg'])
            .then(message => {
                message.react('📚');
                message.react('💻');
                message.react('🎮');
                message.react('🎨');
                message.react('📈');
                message.react('🎞️');
                message.react('🌈');
                message.react('⚽');
            });
    } catch (error) {
        console.error(error);
    }
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
            let emoji = reaction.emoji.name;
            let user_roles = reaction.message.guild.members.cache.get(user.id).roles;

            if (reaction.message.id === emojiID['rules']['msg']) {
                if (emoji === '✅') {
                    await user_roles.add(rolesID['✅']);
                }
            } else

            if (reaction.message.id === emojiID['roles']['msg']) {
                if (emoji === '📚') {
                    await user_roles.add(rolesID['📚']);
                } else

                if (emoji === '💻') {
                    await user_roles.add(rolesID['💻']);
                } else

                if (emoji === '🎮') {
                    await user_roles.add(rolesID['🎮']);
                } else

                if (emoji === '🎨') {
                    await user_roles.add(rolesID['🎨']);
                } else

                if (emoji === '📈') {
                    await user_roles.add(rolesID['📈']);
                } else

                if (emoji === '🎞️') {
                    await user_roles.add(rolesID['🎞️']);
                } else

                if (emoji === '🌈') {
                    await user_roles.add(rolesID['🌈']);
                } else

                if (emoji === '⚽') {
                    await user_roles.add(rolesID['⚽']);
                }
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
            let emoji = reaction.emoji.name;
            let user_roles = reaction.message.guild.members.cache.get(user.id).roles;

            if (reaction.message.id === emojiID['rules']['msg']) {
                if (emoji === '✅') {
                    await user_roles.remove(rolesID['✅']);
                }
            } else

            if (reaction.message.id === emojiID['roles']['msg']) {
                if (emoji === '📚') {
                    await user_roles.remove(rolesID['📚']);
                } else

                if (emoji === '💻') {
                    await user_roles.remove(rolesID['💻']);
                } else

                if (emoji === '🎮') {
                    await user_roles.remove(rolesID['🎮']);
                } else

                if (emoji === '🎨') {
                    await user_roles.remove(rolesID['🎨']);
                } else

                if (emoji === '📈') {
                    await user_roles.remove(rolesID['📈']);
                } else

                if (emoji === '🎞️') {
                    await user_roles.remove(rolesID['🎞️']);
                } else

                if (emoji === '🌈') {
                    await user_roles.remove(rolesID['🌈']);
                } else

                if (emoji === '⚽') {
                    await user_roles.remove(rolesID['⚽']);
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

