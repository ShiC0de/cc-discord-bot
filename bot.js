//npm run devStart
require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ["MESSAGE"]
})


const BOT_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'
const RAND_NUMBER_COMMAND = 'rand-num'

client.on('ready',() => {
    console.log("Our bot is ready to go!!")
})

client.on('messageDelete',msg =>{
    msg.channel.send("Stop deleting messages")
})


client.on('message',msg => {
    if(msg.content == 'I love Gaming'){
        msg.react('❤️')
    }
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`){
        //msg.channel.send("Not tagged")
        //msg.reply("Pong!")
        //msg.member.roles.add("806218089598418955")
        modUser(msg.member)
    }
    if (msg.content === `${BOT_PREFIX}${RAND_NUMBER_COMMAND}`){
        
        msg.channel.send(randnum(10))
    }
})

function modUser(member){
    member.roles.add("806218089598418955")
}
function randnum(num){
    return parseInt(num*Math.random())
}
client.login(process.env.BOT_TOKEN)