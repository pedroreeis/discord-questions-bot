const { Client } = require('discord.js')
const { readdirSync } = require("fs");
const { join } = require("path");

// Construção do client
const client = new Client({
    disableMentions: 'everyone'
});

// Banco de Dados
const db = require('mysql2')
const connection = db.createConnection({host: '', user: '', database: '', password: ''})
connection.connect();
client.connection = connection;

//Events
const eventFiles = readdirSync(join(__dirname, "events")).filter((file) => file.endsWith(".js")); 
    
  for (const file of eventFiles) { 
    const event = require(join(__dirname, "events", `${file}`)); 
    let eventName = file.split(".")[0]; 
    client.on(eventName, (...args) => event.run(client, ...args))
}

// Autenticação
client.login("")