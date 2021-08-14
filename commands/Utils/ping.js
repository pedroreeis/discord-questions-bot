module.exports = {
    name: "ping",
    category: "Utils",
    usage: 'ping',
    aliases: ['latencia'],
    description: "Retorna a latencia do bot",
    run: async (client, message, args, db) => {
      const {MessageEmbed} = require('discord.js')
      
      const embed = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`Pinga: **${client.ws.ping}ms**`).setTimestamp()
      
      message.channel.send(embed)
    }
}