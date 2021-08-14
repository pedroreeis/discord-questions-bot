module.exports.run = async (client, message) => {
    if (message.author.bot) return;
    if (!message.guild) return;

    const prefix = "!"

    client.connection.query(`SELECT * FROM zc_questions`, async function(err, row) {
        var arrayNum = row.length;
        for (var i = 0; i < arrayNum; i++) {
            var keyword = row[i].question_keywords;
            if (message.content.includes(keyword)) {
                message.channel.send(row[i].question_answers);
            }else {
                continue;
            }
        }
    })
    
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member =  message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    

    if (cmd.length === 0) return;
      
    const array = client.commands.map(x => x.aliases.concat([x.name]))//pega todos os comandos(aliases tambem)
    let concated = []
    for (let i = 0; i < array.length; i++) {//loop no array
        concated = concated.concat(array[i].concat(array[i + 1]))
    }

    require('../functions/embeds')(client, message) //pega todas as embeds
      
    let command = client.commands.get(cmd);//pega o comando da collection commands
    if (!command) command = client.commands.get(client.aliases.get(cmd));//se não encontrar ele pega o comando pelo aliase
    if (command) {
          command.run(client, message, args); //executa o comando
    }
}