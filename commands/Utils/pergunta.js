module.exports = {
    name: "pergunta",
    category: "Utils",
    usage: 'pergunta',
    aliases: ['questions', 'chatbot', 'perguntas'],
    description: "Configure a funcionalidade de chatbot do bot.",
    run: async (client, message, args) => {
      const {MessageEmbed} = require('discord.js');

      const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(client.user.username, client.user.avatarURL())
      .setTitle(`Perguntas - Menu`)
      .setDescription(`Neste menu, você pode configurar o bot para responder automaticamentes perguntas definidas por você.`)
      .addField("**!pergunta criar [nome]**", "Crie a pergunta, o nome utilizado aqui irá servir apenas para identificação. ex: phpmyadmin", false)
      .addField("**!pergunta keyword [nome] [keywords]**", "Keyword é a pergunta que você deseja identificar, defina a keyword para o bot reconhecer quando alguem fazer uma pergunta. ex: como acessar o phpmyadmin", false)
      .addField("**!pergunta resposta [nome] [resposta]**", "Defina a resposta para tal pergunta, o bot irá enviar a resposta toda vez que verificar que uma mensagem contem todas as keywords definidas.", false)
      .addField("**!pergunta remover [nome]**", "Remova as perguntas do banco de dados, assim o bot irá parar de responde-las.", false)
      .setFooter("[] - Obrigatório, () - Opcional").setTimestamp();

      if(!args[0]) return message.channel.send(embed);

      if (args[0] == "criar" || args[0] == "create" || args[0] == "add") {
        const perguntaEmbed = new MessageEmbed().setColor("RANDOM").setAuthor(client.user.username, client.user.avatarURL()).setTitle(`Perguntas - Criar`).setDescription("Para criar uma pergunta, execute o comando com os seguintes argumentos: \n **!pergunta criar [nome]** \n Após isso você irá ter criado uma pergunta!").setFooter("[] - Obrigatório, () - Opcional").setTimestamp();
        if(!args[1]) return message.channel.send(perguntaEmbed);

        if(args[1]) {
          let nomepergunta = args[1];
          if(nomepergunta.length > 20) return message.channel.send("Você não pode criar uma mensagem com o nome maior que 20 caracteres.");

          var sql = `INSERT INTO zc_questions (question_id, question_name, question_keywords, question_answers) VALUES(NULL, "${nomepergunta}", NULL, NULL);`
          client.connection.query(sql);
          const perguntaSucessoEmbed = new MessageEmbed().setColor("GREEN").setAuthor(client.user.username, client.user.avatarURL()).setTitle(`Perguntas - Criar (Sucesso)`).setDescription(`Você **criou** uma pergunta com sucesso!  \n  **${nomepergunta}**`).setTimestamp();
          message.channel.send(perguntaSucessoEmbed);
        }
      }

      if (args[0] == "keyword" || args[0] == "palavrachave" || args[0] == "keywords") {
        const perguntaKeywordEmbed = new MessageEmbed().setColor("RANDOM").setAuthor(client.user.username, client.user.avatarURL()).setTitle(`Perguntas - Keywords`).setDescription("Para definir as keywords da pergunta, execute o comando com os seguintes argumentos: \n **!pergunta keyword [nome] [keywords]** \n Após isso você irá ter definido as keywords de uma pergunta! \n **OBS: As keywords devem ser separadas por , e não por espaços!** \n **EXEMPLO: como,acessar,phpmyadmin**").setFooter("[] - Obrigatório, () - Opcional").setTimestamp();
        if(!args[1]) return message.channel.send(perguntaKeywordEmbed);

        if(args[1]) {
          let nomepergunta = args[1];
          if(nomepergunta.length > 20) return message.channel.send("Você não pode definir uma keywork em uma mensagem com o nome maior que 20 caracteres.");

          if(!args[2]) return message.channel.send(`VocÊ deve digitar alguma keyword para usar esse comando.`);

          if(args[2]) {
            var sql = `UPDATE zc_questions SET question_name = "${nomepergunta}", question_keywords = "${args.slice(2).join(" ")}";`
            client.connection.query(sql);
            const perguntaSucessoKeywordEmbed = new MessageEmbed().setColor("GREEN").setAuthor(client.user.username, client.user.avatarURL()).setTitle(`Perguntas - Keywords (Sucesso)`).setDescription(`Você **definiu** keywords para sua pergunta com sucesso!  \n  Pergunta selecionada: **${nomepergunta}** \n Keywords: ${args.slice(2).join(" ")}`).setTimestamp();
            message.channel.send(perguntaSucessoKeywordEmbed);
          }
        }
      }

      if (args[0] == "resposta" || args[0] == "answers" || args[0] == "answer" || args[0] == "respostas") {
        const perguntaRespostaEmbed = new MessageEmbed().setColor("RANDOM").setAuthor(client.user.username, client.user.avatarURL()).setTitle(`Perguntas - Respostas`).setDescription("Para definir uma respota da pergunta, execute o comando com os seguintes argumentos: \n **!pergunta resposta [nome] [resposta]** \n Após isso você irá ter definido as keywords de uma pergunta! \n **OBS: A resposta vai ser tudo o que for escrito depois do nome da pergunta.** \n **EXEMPLO: Para acessar o phpmyadmin você deve acessar link tal.**").setFooter("[] - Obrigatório, () - Opcional").setTimestamp();
        if(!args[1]) return message.channel.send(perguntaRespostaEmbed);

        if(args[1]) {
          let nomepergunta = args[1];
          if(nomepergunta.length > 20) return message.channel.send("Você não pode definir uma resposta em uma mensagem com o nome maior que 20 caracteres.");

          if(!args[2]) return message.channel.send(`VocÊ deve digitar uma resposta para usar esse comando.`);

          if(args[2]) {
            let respostapergunta = args.slice(2).join(" ");
            if(respostapergunta.length > 1500) return message.channel.send(`Você não pode definir uma pergunta maior que 1500 caracteres.`);

            var sql = `UPDATE zc_questions SET question_name = "${nomepergunta}", question_answers = "${respostapergunta}";`
            client.connection.query(sql);
            const perguntaSucessoRespostaEmbed = new MessageEmbed().setColor("GREEN").setAuthor(client.user.username, client.user.avatarURL()).setTitle(`Perguntas - Resposta (Sucesso)`).setDescription(`Você **definiu** a resposta para sua pergunta com sucesso!  \n  Pergunta selecionada: **${nomepergunta}** \n Resposta: ${respostapergunta}`).setTimestamp();
            message.channel.send(perguntaSucessoRespostaEmbed);
          }
        }
      }

      if (args[0] == "remover" || args[0] == "remove" || args[0] == "delete") {
        const perguntaDeleteEmbed = new MessageEmbed().setColor("RANDOM").setAuthor(client.user.username, client.user.avatarURL()).setTitle(`Perguntas - Remover`).setDescription("Para remover uma pergunta, execute o comando com os seguintes argumentos: \n **!pergunta remover [nome]** \n Após isso você irá ter removido uma pergunta!").setFooter("[] - Obrigatório, () - Opcional").setTimestamp();
        if(!args[1]) return message.channel.send(perguntaDeleteEmbed);

        if(args[1]) {
          let nomepergunta = args[1];
          if(nomepergunta.length > 20) return message.channel.send("Você não pode remover uma mensagem com o nome maior que 20 caracteres.");

          var sql = `DELETE FROM zc_questions WHERE question_name = "${nomepergunta}"`
          client.connection.query(sql);
          const perguntaSucessoEmbed = new MessageEmbed().setColor("GREEN").setAuthor(client.user.username, client.user.avatarURL()).setTitle(`Perguntas - Remover (Sucesso)`).setDescription(`Você **removeu** uma pergunta com sucesso!  \n  **${nomepergunta}**`).setTimestamp();
          message.channel.send(perguntaSucessoEmbed);
        }
      }
      
    }
}