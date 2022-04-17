
const { emojiID, rolesID, greetingsID } = require('./settings.js');
const { sendMsg } = require('./tools.js');

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
                    message.react('🎞️');
                    message.react('🌈');
                });
    } catch (error) {
        console.error(error);
    }
}

function reactionRole(client) {
    updateReact(client);

    client.on('messageReactionAdd', async (msgReaction, user) => {
        try {
            if (msgReaction.message.partial) {
                await msgReaction.message.fetch();
            }
            if (msgReaction.partial) {
                await msgReaction.fetch();
            }
        } catch (error) {
            client.error(`Something went wrong when fetching the message:${error}`);
            return;
        }
        if (user.bot) {
            return;
        }

        try {
            let emoji = msgReaction.emoji.name;

            if (msgReaction.message.id === emojiID['rules']['msg'] &&
                emoji in rolesID) {
                await msgReaction.users.remove(user);

                let role_manager = await msgReaction.message.guild.members.cache.get(user.id).roles;
                if (await role_manager.cache.get(rolesID[emoji]) === undefined) {
                    await role_manager.add(rolesID[emoji]);
                    await sendMsg(client, greetingsID, `${user} подтвердил(а) регистрацию! Приветствуем!`);
                }
            } else

            if (msgReaction.message.id === emojiID['roles']['msg'] &&
                emoji in rolesID) {
                await msgReaction.message.guild.members.cache.get(user.id).roles.add(rolesID[emoji]);
            }
        } catch (error) {
            console.error(error);
        }
    });

    client.on('messageReactionRemove', async (msgReaction, user) => {
        try {
            if (msgReaction.message.partial) {
                await msgReaction.message.fetch();
            }
            if (msgReaction.partial) {
                await msgReaction.fetch();
            }
        } catch (error) {
            client.error(`Something went wrong when fetching the message:${error}`);
            return;
        }
        if (user.bot) {
            return;
        }

        try {
            let emoji = msgReaction.emoji.name;

            if (msgReaction.message.id === emojiID['roles']['msg'] &&
                emoji in rolesID) {
                await msgReaction.message.guild.members.cache.get(user.id).roles.remove(rolesID[emoji]);
            }
        } catch (error) {
            console.error(error);
        }
    });
}


module.exports = {
    init: reactionRole,
}

