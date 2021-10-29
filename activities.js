
const act = [
    {
        type: 'PLAYING',
        msg: 'бота на сервере'
    },
    {
        type: 'LISTENING',
        msg: 'звуки дождя'
    },
    {
        type: 'WATCHING',
        msg: 'в будущее'
    },
    {
        type: 'COMPETING',
        msg: 'битве с самим собой'
    }
];


function activities(client) {
    let current = 0;
    setInterval(() => {
        client.user.setActivity(act[current].msg, { type: act[current].type });
        current = (current + 1) % act.length;
    }, 10000);
}


module.exports = {
    init: activities
}

