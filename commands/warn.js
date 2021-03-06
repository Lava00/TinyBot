const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel.');
  if (reason.lenth < 1) return message.reply('A reason for the warning is required.');
  if (message.mentions.users.size < 1) return message.reply('A user must be mentioned to issue a warning.').catch(console.error);

  const embed = new Discord.RichEmbed()
    .setColor(0xFFC300)
    .setTimestamp()
    .setDescription(`**Action:** Warn\n**Target:** ${user.tag} (${user.id}))\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['w', 'warning'],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn <mention> <reason>'
};
