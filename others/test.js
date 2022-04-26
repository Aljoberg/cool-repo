const { Client, Collection } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

const { MessageEmbed } = require('discord.js');


module.exports = {
  name: `test`,
  description: `sends sample embed`,
  aliases: ["t"],
  cooldown: 2,
  edesc: "send sample embed",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //send the Hi embed
    message.reply(new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: "https://i.imgur.com/AfFp7pu.png"})
                 );
                  

  }
}