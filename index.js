const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("ping")) {
     message.channel.send("pong!");
   }
 
 });
 
 client.login("OTQ5MzA2Mzg1MzkxMzIxMTQ4.YiIcdw.ZXsygShHvXmOEJvfyFMrT7ODU8I");