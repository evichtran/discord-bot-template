require('dotenv').config()
const { Client, ButtonBuilder, Message, GatewayIntentBits } = require("discord.js")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers
    ]
})

client.login(process.env.DISCORD_TOKEN)

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online`)
})

client.on('messageCreate', (message) => {
    console.log(message)
})
