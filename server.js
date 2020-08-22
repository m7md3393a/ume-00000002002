require("express")().listen(1343);

const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login("NzQxMTM2ODg5ODg4ODk5MTc0.XyzLhA.CWP0hm8B4xdeKajBm8RYYfFtlwE");
const fetch = require("node-fetch");
const fs = require('fs')

setInterval(() => {
  var links = db.get("linkler");
  if(!links) return;
  var linkA = links.map(c => c.url)
  linkA.forEach(link => {
    try {
      fetch(link)
   } catch(e) { console.log("" + e) };
  })
  console.log("Pong! Requests sent")
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {
db.set("linkler", [])
}

})

client.on("ready", () => {
  client.user.setActivity(`!u -->uptime<--| URL يتم دعم عناوين `)//// هنا حالت البوت
  console.log(`Giriş Yaptı`)
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "!u") {
  var link = spl[1]
  fetch(link).then(() => {
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("هذا الارتباط موجود في النظام")
    message.channel.send("تم رفع مستوى الروبوت الخاص بك 24/7");
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    return message.channel.send("يتم دعم عناوين URL المطلقة فقط")// xD <3
  })
  }
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "!.s") {
  var link = spl[1]
 message.channel.send(`47 robots / project runtime made to order!`)
}})



const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "!.help") {
let embed = new Discord.RichEmbed()
.setColor('#4ca74c')
.addField(`UPtime bot v1.0 instructions`, `يشتمل الروبوت على نظام يحافظ على مواقع الأخطاء مفتوحة 7/24. التوصيلات في النظام تعمل 7/24 دون الحاجة للصيانة.`)
.addField(`Genel Komutlar`,`

\`!.help\` - يعرض قائمة المساعدة.
\`!u\` - يضيف الاتصال الذي حددته إلى النظام.
\`!.s\` - يظهر الروبوتات في النظام.
`)
.addField(`Links`, `[Furkan kaçer](http://tr.link/Kacer)
[Add to Server](https://discord.com/oauth2/authorize?client_id=727978641702649966&scope=bot&permissions=8)
[Destek Sunucusu](https://discord.gg/pABjCEa)`)
.setThumbnail(client.user.avatarURL)
.setAuthor(`Uptime`, client.user.avatarURL)
.setFooter(`Uptime Bot v1.0 Sürüm`, client.user.avatarURL)
return message.channel.send(embed);
    }
 
})

//
//NO PROBLEM I'm leaving come easy
/////////////////EVAL KOMUDU//////=
//client.on("message", async message => {

  //if(!message.content.startsWith("+eval")) return;
  //if(!["689169122604744833","689169122604744833"].includes(message.author.id)) return;
 // var args = message.content.split("+eval")[1]
  //if(!args) return message.channel.send("buraya hata emojisi ..")
  
    //  const code = args
    
    //
  //    function clean(text) {
    //      if (typeof text !== 'string')
     //         text = require('util').inspect(text, { depth: 3 })
       //   text = text
     //         .replace(/`/g, '`' + String.fromCharCode(8203))
   //           .replace(/@/g, '@' + String.fromCharCode(8203))
     //     return text;
    //  };
  
    //  var evalEmbed = ""
    //try {
    //      var evaled = await clean(await eval(await code));
     //     if (evaled.constructor.name === 'Promise') evalEmbed = `\`\`\`\n${evaled}\n\`\`\``
      //    else evalEmbed = `\`\`\`js\n${evaled}\n\`\`\``
          
  //if(evaled.length < 1900) { 
  //   message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
  //} else {
  //  var hast = await require("hastebin-gen")(evaled, { url: "https://hasteb.in" } )
 // message.channel.send(hast)
  //}
   //   } catch (err) {
  //        message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
   //   }
  //})
  
 // const log = message => {
 // console.log(`${message}`);
  //Furkan kaçer