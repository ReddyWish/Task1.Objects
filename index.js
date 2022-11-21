const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

let onlineUsers = users.filter(item => {
    return item.status === 'online'
})
console.log(onlineUsers)

let userOnlineNames = onlineUsers.map(item => item.username).join(', ')
console.log(userOnlineNames)
alert(`Сейчас в онлайн следующие пользователи: ${userOnlineNames}`)