import axios from 'axios';
import { Interaction, MessageEmbed, TextChannel } from 'discord.js';
import { ICommand } from 'wokcommands';

//Make typescript happy
export default {
    category: 'FiveM',
    description: 'Comming Soon',
    
    permissions: [],

    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '[Discord ID]',

    slash: true,
    testOnly: true,

    callback: async ({client, interaction, member, args}) => {
        let url = 'https://servers-frontend.fivem.net/api/servers/single/le6gq5'

        await axios.get(url, {headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'}}).then(async svar => {
            let jsondata = svar.data
            let players = jsondata.Data.players

            const usertofind_DiscordID = args[0]
            let usertofind = players.find((post: { identifiers: string; }) => post.identifiers.includes('discord:' + usertofind_DiscordID))

            let usertofindtxt = `❌ <@${usertofind_DiscordID}> er offline`

            if (usertofind) {
                usertofindtxt = `✅ <@${usertofind_DiscordID}> er online`
            }
        
            const roleIDs = ["957728917236621388", "985677076113797130"];

            let channel = client.guilds.cache.get('946746668328570880')?.channels.cache.get('1004407995549102202') as TextChannel;
            let commandissuer = member.displayName;

            if (member.roles.cache.some(role => roleIDs.includes(role.id as string))) {
                if(member.id === "693935090186715196") return
                await interaction.reply({
                    embeds: [
                        new MessageEmbed()
                            .setColor("#00FF00")
                            .setTitle(`Er det her på grænsen af META? Naaaaah, det er ikke.`)
                            .setDescription(`${usertofindtxt}`)
                            .setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
                    ],
                    ephemeral: true
                });
                return await channel?.send({
                    embeds: [
                        new MessageEmbed()
                            .setTitle('Meta fra Dabbur')
                            .setDescription(`**Bruger:** ${commandissuer}\n**Kommando:** Check\n**Respons:** ${usertofindtxt}`)
                            .setColor('#0099ff')
                            .setTimestamp()
                            .setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
                        ],
                })
            } else {
                console.log(member.nickname + ' Forsøgte at bruge /check')
                return await interaction.reply({
                    embeds: [
                        new MessageEmbed()
                            .setColor("#00FF00")
                            .setTitle(`Kommando ikke oprettet endnu!`)
                    ],
                    ephemeral: true
                });
            }



        
    })
    },
    
} as ICommand;
