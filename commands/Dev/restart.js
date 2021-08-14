module.exports = {
    name: "restart",
    category: "Dev",
    usage: 'restart',
    aliases: ['r', 'rl'],
    description: "Comando privado",
    run: async (client, message, args) => {
      if (message.author.id == "640195412648788018") {
          client.destroy();
          client.login("Njc0NzM4Mzg1NjI5NDc4OTM5.Xjs9Fw.28pCthcN1GV2_w1XuWmDhBIWY4c")
}
else{
    message.channel.send("Comando somente para desenvolvedores.")
}
    }
}