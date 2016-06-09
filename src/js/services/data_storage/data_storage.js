
const data = {
    users : [],
    messages : [],
    usersById : {},
    messagesByUserId : {}
}

function randomInt(range) {
    return Math.floor(Math.random()*range)
} 

/*function messagesSort(a, b) {
    return b.created - a.created
} 
*/

/*TODO: rewrite to real server data fetch*/

export default class DataStorage {


    constructor() {

        data.users = []
        data.messages = []
        data.usersById = []
        data.messagesByUserId = []

        let userSamples = {
            firstName : ['John', 'Roswell', 'Fred', 'Austin', 'Major'],
            lastName : [ 'Emil', 'Parsifal', 'Clem', 'Ferdie' ] ,
            messages: [
            'Know this: that I will protect our brave firefighters, our precious schools and our American workforce.',
            'I will work for an America where Rupert Murdoch yes-men and 24-hour news networks cannot take away our promise for tomorrow.',
            'Unlike myself, my opponent wants an America where internet pornographers and government bureaucrats can undermine our Christian traditions.',
            'My opponent is working with military-industrial warmongers, shifty Canadians and internet pirates.',
            'I want an America where Chilean miners and pot smokers can\'t corrupt our right to transparency.',
            'Unlike my opponent, I have faith in our Bill of Rights, our brave police force and our Bibles.',
            'I refuse to support an America where rich oil companies and Hollywood liberals can sabotage our sacred constitution.',
            'My opponent is conspiring with sex workers, street gangs and Iranian extremists.'
            ]
        }

        /*Generate users*/

        const usersCount = 3 + randomInt(6)

        for (let i = 0; i < usersCount; i++) {
            const userId = i
            const name = userSamples.firstName[randomInt(userSamples.firstName.length)] + ' ' + userSamples.lastName[randomInt(userSamples.lastName.length)]
            const user = {
                id : userId, 
                name : name ,
                born : randomInt(Date.now())
            }
            data.users.push(user)
            data.usersById[user.id] = user
        }

        /* Generate messages */

        const messageCount = 1 + randomInt(18)

        for (let i = 0; i < messageCount; i++) {
            
            const user = data.users[randomInt(data.users.length)]
            
            const message = { 
                id : i,
                message : userSamples.messages[randomInt(userSamples.messages.length)], 
                userId : user.id , 
                created : Date.now() - randomInt(10000000),
                userName : user.name 
            }

            data.messages.push(message)

            data.messagesByUserId[ message.userId ] = data.messagesByUserId[ message.userId ] || []
            data.messagesByUserId[ message.userId ].push(message)

        }

    }

    get messages() {
        return data.messages
    }

    get users() {
        return data.users
    }

    getUser(id) {
        return data.usersById[id]
    }

    getMessagesForUser(id) {
        return data.messagesByUserId[id] || []
    }

    addMessage(message) {
        
        const toSave = angular.extend(
            {}, 
            message, 
            { userName : data.usersById[message.userId].name, created: Date.now(), id : data.messages.length }
        )
        
        data.messages.unshift(toSave)

        data.messagesByUserId[ toSave.userId ] = data.messagesByUserId[ toSave.userId ] || []
        data.messagesByUserId[ toSave.userId ].unshift(toSave)

        return toSave

        
    }

}

