const Discord = require('discord.js');
const LuxApp = new Discord.Client();

LuxApp.on('message',Message =>{
    if(message.content.starsWith('.test')){
        message.channel.send('?');

    }
  
LuxApp.login('MzUxNzQ4ODQzMDM1MDMzNjAx.DTlBgg.sbbo3yJaPuCnty5lBPABFNoWTCo');
