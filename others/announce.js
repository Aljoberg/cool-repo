const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `announce`,
  description: `sends invite links`,
  aliases: ["announce"],
  cooldown: 2,
  edesc: "creates announcements",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
     //delete the Command
    message.delete({ timeout: 300 });
    //send the Hi embed
    message.reply(new MessageEmbed()
      .setColor("#FFFF00")
      .setTitle("Ayo wassup?")
      .setDescription(`Invitation Links To Bots Created By:`)
      .addField("• DEV", `\`\`\`yml\nName of Dev: 【亗『PAIN』亗】#4005 \`\`\``)      
      .addField("• Important Links", `**\`[Support Server](https://discord.gg/RNcbXMGBJh)\`|\`[Insta](https://www.instagram.com/akt_pain69/)\**`)
      .addField("• Invite To Server", `**[【💔 ✘ ᴘᴀɪɴ 】]( https://discord.com/api/oauth2/authorize?client_id=968792641137430538&permissions=8&scope=bot )\`|\`[【⭕ ✘ ᴘᴀɪɴ 】](https://discord.com/api/oauth2/authorize?client_id=967514923229933588&permissions=8&scope=bot)\`|\`[【❌ ✘ ᴘᴀɪɴ 】](https://discord.com/api/oauth2/authorize?client_id=968257236013056122&permissions=8&scope=bot)\**`)     
      .addField("Plz Leave A Review In The Support Server",`>> Mention @亗『PAIN』亗】#4005 In Support Server For Any Help <3 `)   
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL()));
  
  }
}
