module.exports = {
    name: "pergunta",
    category: "Utils",
    usage: 'pergunta',
    aliases: ['questions', 'chatbot', 'perguntas'],
    description: "Configure a funcionalidade de chatbot do bot.",
    run: async (client, message, args) => {
      const {MessageEmbed} = require('discord.js');

      if(!args[0]) {
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(client.user.username)
        .setTitle(`Perguntas - Menu`)
        .setDescription(`Neste menu, você pode configurar o bot para responder automaticamentes perguntas definidas por você.`)
        .addField("**!pergunta criar [nome]**", "Crie a pergunta, o nome utilizado aqui irá servir apenas para identificação. ex: phpmyadmin", false)
        .addField("**!pergunta keyword [nome/id] [keywords]**", "Keyword são palavras chave, defina palavras chaves para o bot reconhecer quando alguem fazer uma pergunta, lembre-se de separar essas palavras com virgula. ex: como,acessar,phpmyadmin", false)
        .addField("**!pergunta resposta [nome/id] [resposta]**", "Defina a resposta para tal pergunta, o bot irá enviar a resposta toda vez que verificar que uma mensagem contem todas as keywords definidas.", false)
        .addField("**!pergunta remover [nome/id]**", "Remova as perguntas do banco de dados, assim o bot irá parar de responde-las.", false)
        .setFooter("[] - Obrigatório, () - Opcional").setTimestamp()
        message.channel.send(embed)
      }else if (args[0] == "criar") {
        message.channel.send("criar");
      }else if (args[0] == "keyword") {
        message.channel.send("keyword");
      }else if (args[0] == "resposta") {
        message.channel.send("resposta");
      }else if (args[0] == "remover") {
        message.channel.send("remover");
      }
      
    }
}