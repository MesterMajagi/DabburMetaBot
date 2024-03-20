import axios from 'axios';
import { Interaction, MessageEmbed, TextChannel } from 'discord.js';
import { ICommand } from 'wokcommands';

//Make typescript happy
export default {
    category: 'FiveM',
    description: 'Comming Soon',
    
    permissions: [],

    slash: true,
    testOnly: true,

    callback: async ({client, interaction, member}) => {
        let url = 'https://servers-frontend.fivem.net/api/servers/single/le6gq5'

        await axios.get(url, {headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'}}).then(async svar => {
            let jsondata = svar.data
            let players = jsondata.Data.players

            let Alsing = players.find((post: { identifiers: string; }) => post.identifiers.includes('discord:178234081232945152'))
            let Wagner = players.find((post: { identifiers: string; }) => post.identifiers.includes('discord:374504289273380865'))
            let daNi = players.find((post: { identifiers: string; }) => post.identifiers.includes('discord:359802043243692033'))
            let Ev1lBull3T = players.find((post: { identifiers: string; }) => post.identifiers.includes('discord:627229398365634577'))
            let LarsDK = players.find((post: { identifiers: string; }) => post.identifiers.includes('discord:648514255968141315'))
            let Reamik = players.find((post: { identifiers: string; }) => post.identifiers.includes('discord:762290810078363700'))

            let Alsingtxt = '❌ <@178234081232945152> er offline'
            let Wagnertxt = '❌ <@374504289273380865> er offline'
            let dAntxt = '❌ <@359802043243692033> er offline'
            let Ev1lBull3Ttxt = '❌ <@627229398365634577> er offline'
            let larsdktxt = '❌ <@648514255968141315> er offline'
            let reamiktxt = '❌ <@762290810078363700> er offline'

            let count = 0
            if (Alsing) {
                count++
                Alsingtxt = '✅ <@178234081232945152> er online' 
            } if (Wagner) {
                count++
                Wagnertxt = '✅ <@374504289273380865> er online'
            } if (daNi) {
                count++
                dAntxt = '✅ <@359802043243692033> er online'
            } if (Ev1lBull3T) {
                count++
                Ev1lBull3Ttxt = '✅ <@627229398365634577> er online'
            } if (LarsDK) {
                count++
                larsdktxt = '✅ <@648514255968141315> er online'
            } if (Reamik) {
                count++
                reamiktxt = '✅ <@762290810078363700> er online'
            }
        
            const roleIDs = ["985677076113797130", "957728067781009509", "957729635918053477"];

            let channel = client.guilds.cache.get('946746668328570880')?.channels.cache.get('1004407995549102202') as TextChannel;
            let commandissuer = member.displayName;

            if (member.roles.cache.some(role => roleIDs.includes(role.id as string))) {
                await interaction.reply({
                    embeds: [
                        new MessageEmbed()
                            .setColor("#00FF00")
                            .setTitle(`Er det her på grænsen af META? Naaaaah, det er ikke.`)
                            .setDescription(`${dAntxt}\n${reamiktxt}\n${larsdktxt}\n${Wagnertxt}\n${Alsingtxt}\n${Ev1lBull3Ttxt}`)
                            .setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
                    ],
                    ephemeral: true
                });
                return await channel?.send({
                    embeds: [
                        new MessageEmbed()
                            .setTitle('Meta fra Dabbur')
                            .setDescription(`**Bruger:** ${commandissuer}\n**Kommando:** Bagmænd\n**Antal:** ${count}`)
                            .setColor('#0099ff')
                            .setTimestamp()
                            .setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
                        ],
                })
            } else {
                console.log(`${member.displayName} (${member.id}) Forsøgte at bruge /bagmænd`)
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
