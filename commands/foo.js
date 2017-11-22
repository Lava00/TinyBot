exports.run = (client, message) => {
  message.channel.send('bar');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'foo',
  description: 'Lava',
  usage: 'foo'
};
