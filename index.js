const Discord = require('discord.js')
const config = require("./config.json")
const client = new Discord.Client()
const prefix = '!'

client.on('ready', () =>{
    console.log('bot roshan sod')
    client.user.setActivity("salam chtorid?", {type: "LISTENING" })

});

client.on('message', Message => {
    if(Message.author.bot || Message.channel.type == "dm") return;
    const cmd = Message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    if(messageArray == 'سلام'){
        Message.channel.send('سلام به شما')
    }
})



client.on('ready', () => {
    console.log(``);
    setInterval(() => {
          const channel = client.channels.cache.get("923624748838170664");
          if (!channel) return console.error("Channeli Vojod Nadarad");
          channel.join().then(connection => {
              console.log("");
             connection.voice.setSelfDeaf(true)
               //connection.voice.setSelfMute(true);
          }).catch(e => {
    
              console.error(e);
          })
      }, 5000); 
    });
    
    client.on("ready", () => {
        function sobhan() {
              let vazyiat = ["dnd", "idle","online"] // online | dnd | idle | offline
              let godrat = Math.floor(Math.random() * vazyiat.length)
              client.user.setPresence({
              status: vazyiat[godrat] })
        }; setInterval(sobhan, 3000)
      });

      

client.login(config.token)