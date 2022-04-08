require('dotenv').config();
const {Client, Intents} = require('discord.js');
const axios = require('axios');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', async msg => {
   switch (msg.content) {
      case "ocho":
         msg.reply("el culo te abrocho!");
         break;
      //our meme command below
      case "!boca":
         msg.channel.send("Aguante boooooca!!"); //Replies to user command
         const video = await getVideo(); 
         msg.channel.send(video); //send the image URL
         break;
   }
})

async function getVideo() {
   return "https://www.youtube.com/watch?v=Emp7ntPJm2w"
}

client.login(process.env.CLIENT_TOKEN); //login bot using token