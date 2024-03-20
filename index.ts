import DJS, { Intents, MessageEmbed, TextChannel } from "discord.js";
import WOK from "wokcommands";
import axios from "axios";
import path from "path";
import "dotenv/config";

const client = new DJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

const UpdateDabbur = () => {
  let url = 'https://servers-frontend.fivem.net/api/servers/single/le6gq5'

        axios.get(url, {headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'}}).then(async svar => {
            let data = svar.data
            let players = data.Data.players

    let ID1 = players.find((post: { identifiers: string }) =>
      post.identifiers.includes(process.env.DiscordID1 as string)
    );
    let ID2 = players.find((post: { identifiers: string }) =>
      post.identifiers.includes(process.env.DiscordID2 as string)
    );
    let ID3 = players.find((post: { identifiers: string }) =>
      post.identifiers.includes(process.env.DiscordID3 as string)
    );
    let ID4 = players.find((post: { identifiers: string }) =>
      post.identifiers.includes(process.env.DiscordID4 as string)
    );
    let ID5 = players.find((post: { identifiers: string }) =>
      post.identifiers.includes(process.env.DiscordID5 as string)
    );
    let ID6 = players.find((post: { identifiers: string }) =>
      post.identifiers.includes(process.env.DiscordID6 as string)
    );
    let ID7 = players.find((post: { identifiers: string }) =>
      post.identifiers.includes(process.env.DiscordID7 as string)
    );
    let ID8 = players.find((post: { identifiers: string }) =>
      post.identifiers.includes(process.env.DiscordID8 as string)
    );
    let ID9 = players.find((post: { identifiers: string }) =>
      post.identifiers.includes(process.env.DiscordID9 as string)
    );
    let ID10 = players.find((post: { identifiers: string }) =>
      post.identifiers.includes(process.env.DiscordID10 as string)
    );
    let ID11 = players.find((post: { identifiers: string }) =>
      post.identifiers.includes(process.env.DiscordID11 as string)
    );
    let ID12 = players.find((post: { identifiers: string }) =>
      post.identifiers.includes(process.env.DiscordID12 as string)
    );

    let count = 0;
    if (ID1) {
      count++;
    }
    if (ID2) {
      count++;
    }
    if (ID3) {
      count++;
    }
    if (ID4) {
      count++;
    }
    if (ID5) {
      count++;
    }
    if (ID6) {
      count++;
    }
    if (ID7) {
      count++;
    }
    if (ID8) {
      count++;
    }
    if (ID9) {
      count++;
    }
    if (ID10) {
      count++;
    }
    if (ID11) {
      count++;
    }
    if (ID12) {
      count++;
    }

    count = count*13
    
    if (count % 2 == 1) {
    client.user?.setActivity(`Niko's IQ: ${count}`);
    } else {
      client.user?.setActivity(`Benji's IQ: ${count}`);
    }
  }).catch( async err => {
    console.log('Mistet forbindelse til NightLife kl ' + new Date().toLocaleTimeString())
    await new Promise(f => setTimeout(f, 1000 * 60 * 5));
    });
};

let SkudCalcCount = 0
let SkudCalcChannel = "972486462006231040"
let SkudCalcStickyContent = "🔩 Craft af"
let CraftCalcCount = 0
let CraftCalcChannel = "973583718067359774"
let CraftCalcStickyContent = "🔩 Craft af"

client.on("ready", async () => {
  console.log("Ready");
  let SkudChannel = client.channels.cache.get("972486462006231040") as TextChannel;
  let VåbenChannel = client.channels.cache.get("973583718067359774") as TextChannel;

  SkudChannel.messages.fetch({ limit: 1 }).then((messages) => {
    messages.forEach(message => {
      message.embeds.forEach((embed) => {
      if(embed.title?.startsWith(SkudCalcStickyContent)) return;
      else SkudChannel.send({
        embeds: [
          new MessageEmbed()
            .setColor("#206694")
            .setTitle('🔩 Craft af skud')
            .setDescription(`/skud [hvilket våben] [antal skud]`)
            .setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
          ],
        })
      })
    })
  })

  VåbenChannel.messages.fetch({ limit: 1 }).then((messages) => {
    messages.forEach(message => {
      message.embeds.forEach((embed) => {
      if(embed.title?.startsWith(SkudCalcStickyContent)) return;
      else VåbenChannel.send({
        embeds: [
          new MessageEmbed()
            .setColor("#206694")
            .setTitle('🔩 Craft af våben')
            .setDescription(`/Craft [hvilket våben] [antal blueprints]`)
            .setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
          ],
        })
      })
    })
  })

  new WOK(client, {
    commandsDir: path.join(__dirname, "commands"),
    typeScript: true,
    testServers: ["957727850302169169"],
    botOwners: ["427433604650631168"],
  });
  setInterval(UpdateDabbur, 1000 * 60);

  //client.application?.commands.set([], "957727850302169169")

});

client.on('messageCreate', async message => {
  if(message.channel.id === SkudCalcChannel){
  SkudCalcCount++
  if (SkudCalcCount > 1) {
    message.channel.messages.fetch({ limit: 5 }).then(messages => {
      messages.forEach(message => {
        message.embeds.forEach((embed) => {
        if(embed.title?.startsWith(SkudCalcStickyContent)) {
          message.delete();
          SkudCalcCount = 0
          message.channel.send({
            embeds: [
              new MessageEmbed()
                .setColor("#206694")
                .setTitle('🔩 Craft af skud')
                .setDescription(`/skud [hvilket våben] [antal skud]`)
                .setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
            ],
          })
          
        }});
      });
      })
    }}
  if(message.channel.id === CraftCalcChannel){
    CraftCalcCount++
      if (CraftCalcCount > 1) {
        message.channel.messages.fetch({ limit: 5 }).then(messages => {
          messages.forEach(message => {
            message.embeds.forEach((embed) => {
            if(embed.title?.startsWith(CraftCalcStickyContent)) {
              message.delete();
              CraftCalcCount = 0
              message.channel.send({
                embeds: [
                  new MessageEmbed()
                    .setColor("#206694")
                    .setTitle('🔩 Craft af våben')
                    .setDescription(`/Craft [hvilket våben] [antal blueprints]`)
                    .setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
                ],
              })
              
            }});
          });
          })
        }}
  })

client.login(process.env.TOKEN);
