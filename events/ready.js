const { Collection } = require("discord.js")
module.exports.run = (client) => {
    client.commands = new Collection();
    client.aliases = new Collection();

    require('../handlerController.js')(client);
}
