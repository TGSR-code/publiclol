const Discord = require('discord.js');
const Client = new Discord.Client();
const token = 'ODcyNTI4MDcxNjMzMjg5MjU2.YQrLFw.7LplqQynf57pAq9fFcPiCC62ubs';

const Prefix = '!'

Client.on('ready', () =>{
    console.log ('Paimon is ready');
})
    Client.on('message', message => {
        if (message.content === `${Prefix}Test Paimon`) {
            message.channel.send('Yes ^^');
            
        } else if (message.content === `${Prefix}Paimon and Qiqi`) {
            message.channel.send('Yes?');
                
        }   else if (message.content === `Good bots ^^`) {
            message.channel.send('^^');
                
        } else if (message.content === `${Prefix}Test`) {
            message.channel.send('Yes ^^');
                
        }

Client.user.setActivity('Goodbye you amazing people! ^^ Version 0.1.1 Paimon', { type: 'PLAYING'}).catch(console.error);
});
    Client.login(token);