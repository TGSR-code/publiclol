const Discord = require('discord.js');
const Client = new Discord.Client();
const token = 'ODcyNTMxMzEyODk0OTU1NjAw.YQrOGw.bK9c2bktHOUYBqPzz_mp3TTOhjk';

const Prefix = '!'

Client.on('ready', () =>{
    console.log ('Qiqi is ready');
})
Client.on('message', message => {
    if (message.content === `${Prefix}Test Qiqi`) {
        message.channel.send('Yes Master');
        
    } else if (message.content === `${Prefix}Paimon and Qiqi`) {
        message.channel.send('Yes Master?');
            
    }  else if (message.content === `Good bots ^^`) {
        message.channel.send('Yeee ^^');
            
    } else if (message.content === `${Prefix}Test`) {
        message.channel.send('Yes Master ^^');
            
    }

Client.user.setActivity('Goodbye Master! Version 0.1.1 Qiqi', { type: 'PLAYING'}).catch(console.error);
});
    Client.login(token);