const { Client } = require('discord.js')
const { readdirSync } = require("fs");
const { join } = require("path");

// Construção do client
const client = new Client({
    disableMentions: 'everyone'
});

// Banco de Dados
const db = require('mysql2')
const connection = db.createConnection({host: '147.135.64.147', user: 'u1038_oI3ZeSXf5a', database: 's1038_database', password: 'TKvIOZ+bBuw^RjIAU!+Vwnt='})
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
client.login("Njc0NzM4Mzg1NjI5NDc4OTM5.Xjs9Fw.28pCthcN1GV2_w1XuWmDhBIWY4c")