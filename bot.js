
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require ("./ayarlar.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(ayarlar.token);
