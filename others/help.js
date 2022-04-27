const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
  approveemoji,
  denyemoji 
} = require(`../config.json`);

module.exports = {
  name: `help`,
  description: `Gives you a list of all help Commands`,
  aliases: ["h","commands"],
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  execute(message,args,client) {
     
    let commands = message.client.commands.array();
 
    let helpEmbed = new MessageEmbed()
    .setTitle("HELP MENU 🔰 Commands")
    .addField("Requested By :",`${message.member.user}`)
    .addField('Prefix Information', `Prefix: \`${PREFIX}\`\nYou can also mention ${client.user} to get prefix info.`, false)
    .addField("• INFO", `\`\`\`yml\nName: ->`+ client.user.username +` \`\`\``)
    .addField("• INFO", `\`\`\`yml\nDev: 【亗『PAIN』亗】#4005 \`\`\``)
    .addField("• Important Links", `**[Invite Link](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)\`|\`[Support Server](https://discord.gg/RNcbXMGBJh)\`|\`[Insta](https://www.instagram.com/akt_pain69/)\**`)

      .addField("• Invite To Server", `**[【💔 ✘ ᴘᴀɪɴ 】]( https://discord.com/api/oauth2/authorize?client_id=968792641137430538&permissions=8&scope=bot )\`|\`[【⭕ ✘ ᴘᴀɪɴ 】](https://discord.com/api/oauth2/authorize?client_id=967514923229933588&permissions=8&scope=bot)\`|\`[【❌ ✘ ᴘᴀɪɴ 】](https://discord.com/api/oauth2/authorize?client_id=968257236013056122&permissions=8&scope=bot)\**`)

      
    .addField(`All Commands are Below `,`Hope it helps`)

      .setFooter( client.user.username +`Type: ${PREFIX}help <Command>  for more information!`)
      .setColor("#F0EAD6");

      let ifargstruedothis = -1;
      
      switch(args[0]){
          case "filter":
           ifargstruedothis=0;
          break;
          case "loop":
            ifargstruedothis=1;
          break;
          case "lyrics":
            ifargstruedothis=2
          break;
          case "nowplaying":
            ifargstruedothis=3
          break;
          case "pause":
            ifargstruedothis=4
          break;
          case "play":
            ifargstruedothis=5
          break;
          case "playlist":
            ifargstruedothis=6
          break;
          case "queue":
            ifargstruedothis=7
          break;
          case "radio":
            ifargstruedothis=8
          break;
          case "remove":
            ifargstruedothis=9
          break;
          case "resume":
            ifargstruedothis=10
          break;
          case "search":
            ifargstruedothis=11
          break;
          case "shuffle":
            ifargstruedothis=12
          break;
          case "skip":
            ifargstruedothis=13
          break;
          case "skipto":
            ifargstruedothis=14
          break;
          case "stop":
            ifargstruedothis=15
          break;
          case "volume":
            ifargstruedothis=16
          break;
          case "help":
            ifargstruedothis=17
          break;    
          case "invite":
            ifargstruedothis=18
          break;
          case "ping":
            ifargstruedothis=19
          break;
          case "prefix":
            ifargstruedothis=20
          break;
          case "uptime":
            ifargstruedothis=21
          break;
          case "botlist":
            ifargstruedothis=22
          break; 
          default:        
            commands.forEach((cmd) => {
              helpEmbed.addField(
                `**${message.client.prefix}${cmd.name}**`,
                `${cmd.description}`,
                true
              );
            });
          if(!message.guild) {
            if(!args[0]) {message.react(approveemoji);return message.channel.send(helpEmbed);}
            return
            }
            message.channel.send(helpEmbed);
           
        break;
       }
     
       if(ifargstruedothis>=0){
         let aliases = commands[ifargstruedothis].aliases;
         if(aliases === undefined || !aliases) aliases="No Aliases!";
         let cooldown = commands[ifargstruedothis].cooldown;
         if(cooldown === undefined || !cooldown) cooldown="No Cooldown!";



//specific command help
         let helpEmbed1 = new MessageEmbed()
    .setTitle("COMMAND INFO 🔰 ")
    .addField(`Command info is given Below `,`Hope it helps`)
    .setFooter( `>> Type: ${PREFIX}help <Command>  for more information!`)
      .setColor("#F0EAD6");

        helpEmbed1.addField(
          `**${message.client.prefix}${commands[ifargstruedothis+1].name}**`,
          `\`\`\`fix\n${commands[ifargstruedothis+1].edesc}\n\`\`\`\n\`${commands[ifargstruedothis].description}\``
        );
        helpEmbed1.addField(
          `**:notes: Aliases:**`,
          `\`${aliases}\``
        );
        helpEmbed1.addField(
          `**:wrench: Cooldown:**`,
          `\`${cooldown}\``
        );
        if(!message.guild) return message.channel.send(helpEmbed1);
          message.channel.send(helpEmbed1);
       }

}
}
