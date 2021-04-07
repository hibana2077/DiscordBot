    const {Client, RichEmbed, Discord, Message} = require('discord.js') ;
    const client = new Client ;
    const settings = require('./settings.json') ;
    
    client.on('ready',()=>{
        console.log(`${client.user.tag} Go online...`) ;
        console.log(`${client.user.tag} Ready to go!`) ;
    }) ;

    

    client.on('message',msg=>{
        const args = msg.content.slice(2).split(' '); // Split all spaces so you can get the command out of the message
        const cmd = args.shift().toLowerCase(); // Get the commands name
        if(msg.author.bot){
            return;   //if the message from bot 
        }
	        
        if(msg.content.startsWith(settings.prefix+'test')){
            
            msg.channel.send(`hi ${msg.author}`)
        }
        if(msg.content.includes(">>早安")){
            msg.reply(`guten Morgen!`)
        }
        if(msg.content.includes(">>本本")){
            var loma = hentai(336533,1)
            loma = parseInt(loma)
            msg.reply(`${loma}`)
        }
        if(msg.content.includes(">>time")){
            const currentDate = new Date();
            msg.reply(currentDate.toLocaleString());
        }
        if (!msg.content.startsWith('>>')) {
            return; // If the message doesn't start with the prefix return

        }

        switch (cmd) {
            
            case 'google' :
                msg.channel.send(`${msg.content.slice(2)}`); /* Get all the stored messages and map them + send them */
                
                var cum = msg.content.slice(8);
                var iceT = `https://www.google.com/search?q=`+`${cum}`;
                iceT=iceT.replace(' ','');/*放好 */
                msg.channel.send(`${iceT}`)
                msg.channel.send({embed: {
                    color: 3447003,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL
                    },
                    title: "如何查看我的搜尋結果",
                    url: `https://www.google.com/search?q=well+cum`,
                    description: "上面的連結是您所搜尋的結果",
                    fields: [{
                        name: "YouTube 搜尋功能",
                        value: ">>youtube *要搜尋的內容*"
                      },
                      {
                        name: "Google 搜尋功能",
                        value: ">>google *要搜尋的內容*"
                      }
                    ],
                    timestamp: new Date(),
                    footer: {
                      icon_url: client.user.avatarURL,
                      text: "© Version 0.1"
                    }
                  }
                });
                break;
            case 'youtube' :
                msg.channel.send(`${msg.content.slice(2)}`)
                var bigd = msg.content.slice(10);
                bigd = bigd.replace(' ','+')
                var uc = `https://www.youtube.com/results?search_query=`+`${bigd}`;
                uc=uc.replace(' ','');
                msg.channel.send(`${uc}`)
                break;
  }
        
    function hentai(max,min){
        return Math.random() * (max - min) + min;
    }
    }) ;

    client.login(settings.token) ;