//Tohle je bot
const { Client, IntentsBitField, GuildMember } = require('discord.js');

const client = new Client(
  {
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
      IntentsBitField.Flags.GuildMessageReactions,
      IntentsBitField.Flags.DirectMessageReactions,
    ],
  });

client.on('ready', (c) => {
  const https = require("https");
  const fs = require("fs");
  const url_rooms = "https://vitekform.github.io/storage/bot/room.txt";
  const url_info = "https://vitekform.github.io/storage/bot/blacklist_dates.txt";
  if (!fs.existsSync("blacklist_dates.txt") || !fs.existsSync("room")) {
    https.get(url_info, (res) => {
      const infopath = "blacklist_dates.txt";
      const writeStream = fs.createWriteStream(infopath);

      res.pipe(writeStream);

      writeStream.on("finish", () => {
        writeStream.close();
        console.log("Download Completed!");
      })
    })
    https.get(url_rooms, (res) => {
        const infopath = "room.txt";
        const writeStream = fs.createWriteStream(infopath);
  
        res.pipe(writeStream);
  
        writeStream.on("finish", () => {
          writeStream.close();
          console.log("Download Completed!");
        })
      })
  }
  else {
    const fs = require("fs");
    const path_dates = "blacklist_dates.txt"
    const path_rooms = "room.txt"

    try {
      fs.unlinkSync(path_dates);
      fs.unlinkSync(path_rooms);
      console.log("File removed:", path_dates);
      console.log("File removed:", path_rooms);
    } catch (err) {
      console.error(err);
    }
    const https = require("https");
    const url_info = "https://vitekform.github.io/storage/bot/blacklist_dates.txt";
    const url_rooms = "https://vitekform.github.io/storage/bot/room.txt";
    if (!fs.existsSync("blacklist_dates.txt") || !fs.existsSync("room.txt")) {
      https.get(url_info, (res) => {
        const infopath = "blacklist_dates.txt";
        const writeStream = fs.createWriteStream(infopath);

        res.pipe(writeStream);

        writeStream.on("finish", () => {
          writeStream.close();
          console.log("Download Completed!");
        })
      })
      https.get(url_rooms, (res) => {
        const infopath = "room.txt";
        const writeStream = fs.createWriteStream(infopath);

        res.pipe(writeStream);

        writeStream.on("finish", () => {
          writeStream.close();
          console.log("Download Completed!");
        })
      })
    }
  }
  console.log(`${c.user.username} is online!`)
})
client.on('messageCreate', (message) => {
    codear = ["/code", "!code"]
  const channelname = message.channel.name;
  var msg = message.content;
  let text = msg;
  var creator = message.author.displayName;
  if (msg === "!kdy") {
    function getNextMonday(date = new Date()) {
      const dateCopy = new Date(date.getTime());

      const nextMonday = new Date(
        dateCopy.setDate(
          dateCopy.getDate() + ((7 - dateCopy.getDay() + 1) % 7 || 7), //Getter dalšího pondělí
        ),
      );

      return nextMonday;
    }
    const nextmon = getNextMonday(new Date());
    var date = nextmon;
    const datewithouttime = date.toISOString().split('T')[0]; //Ojebe datum o čas takže teď máme datum ve formátu MM/DD/YYYY
      var day = 0;
      var month = 0;
      var year = 0;
      let blacklist = 0;
      var array = datewithouttime.split('-'), day = array[2], month = array[1], year = array[0]; //Vytáhne samostatný den měsíc a rok z data :D
      const fs = require('fs') //File abuse moment incoming :D
      fs.readFile('blacklist_dates.txt', function read(err, data) { //Přečte blacklist_dates.txt
    if (err) {
        throw err;
    }
    const content = data.toString();
          console.log(content);
          var day2 = 0;
          var month2 = 0; //To col je ve filu btw
          var year2 = 0;
          var array2 = content.split('.'), day2 = array2[2], month2 = array2[1], year2 = array2[0]; //Zase rozjebu soubor na den měsíc a rok
          console.log(day);
          console.log(month);
          console.log(year);
          console.log(day2);
          console.log(month2);
          console.log(year2);
          if (day == day2 && month == month2 && year == year2){ //Když jsou hodnoty ve filu identické s dalším pondělím
                      message.reply(":x: Příště nebude kroužek! :x:")
                  
          }
          else{
                    message.reply("Další kroužek bude: " + day + "." + month + "." + year + " 16:00");
                  }
});
    
  }
  else if(msg === "!help"){
        message.reply("Dostupné příkazy jsou: !kde, !kdy, !help, !rep, !code");
  }
  else if(msg === "!kde"){
    const fs = require('fs')
    fs.readFile('room.txt', function read(err, data) { //Přečte room.txt
        if (err) {
            throw err;
        }
        let content = data.toString();
        message.reply("Další hodina bude v " + content);
    })

  }
  else if(msg === "!rep"){
        message.reply("Repo nalezneš na : https://github.com/vitekform/bot_info");
  }
  else if (msg === "!code"){
        message.reply("Veškerý kód najdeš na https://vitekform.github.io/storage/code/")
  }
  
}
);

client.login("Ty sis myslel že tu bude token? :D");