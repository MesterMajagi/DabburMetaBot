import axios from 'axios';
import { Interaction, MessageEmbed, Message, GuildMemberRoleManager, Role, TextChannel } from 'discord.js';
import { ICommand } from 'wokcommands';

//Make typescript happy
export default {
    category: 'FiveM',
    description: 'Comming Soon',
    
    permissions: [],

    slash: true,
    testOnly: true,

    callback: async ({client, interaction, message, member, guild}) => {
        const members = await guild?.members.fetch();
        const membersWithRole = members?.filter(member => member.roles.cache.has('957728917236621388'));
        const membersWithRoleId = membersWithRole?.map(member => member.id);
        const bandit1 = membersWithRoleId?.[0];
        const bandit2 = membersWithRoleId?.[1];
        const bandit3 = membersWithRoleId?.[2];
        const bandit4 = membersWithRoleId?.[3];
        const bandit5 = membersWithRoleId?.[4];
        const bandit6 = membersWithRoleId?.[5];
        const bandit7 = membersWithRoleId?.[6];
        const bandit8 = membersWithRoleId?.[7];
        const bandit9 = membersWithRoleId?.[8];
        const bandit10 = membersWithRoleId?.[9];
        const bandit11 = membersWithRoleId?.[10];
        const bandit12 = membersWithRoleId?.[11];

        let url = 'https://servers-frontend.fivem.net/api/servers/single/le6gq5'

        await axios.get(url, {headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'}}).then(async svar => {
            let jsondata = svar.data
            let players = jsondata.Data.players

            let bandit1ID = players.find((post: { identifiers: string; }) => post.identifiers.includes(`discord:${bandit1 as string}`));
            let bandit2ID = players.find((post: { identifiers: string; }) => post.identifiers.includes(`discord:${bandit2 as string}`));
            let bandit3ID = players.find((post: { identifiers: string; }) => post.identifiers.includes(`discord:${bandit3 as string}`));
            let bandit4ID = players.find((post: { identifiers: string; }) => post.identifiers.includes(`discord:${bandit4 as string}`));
            let bandit5ID = players.find((post: { identifiers: string; }) => post.identifiers.includes(`discord:${bandit5 as string}`));
            let bandit6ID = players.find((post: { identifiers: string; }) => post.identifiers.includes(`discord:${bandit6 as string}`));
            let bandit7ID = players.find((post: { identifiers: string; }) => post.identifiers.includes(`discord:${bandit7 as string}`));
            let bandit8ID = players.find((post: { identifiers: string; }) => post.identifiers.includes(`discord:${bandit8 as string}`));
            let bandit9ID = players.find((post: { identifiers: string; }) => post.identifiers.includes(`discord:${bandit9 as string}`));
            let bandit10ID = players.find((post: { identifiers: string; }) => post.identifiers.includes(`discord:${bandit10 as string}`));
            let bandit11ID = players.find((post: { identifiers: string; }) => post.identifiers.includes(`discord:${bandit11 as string}`));
            let bandit12ID = players.find((post: { identifiers: string; }) => post.identifiers.includes(`discord:${bandit12 as string}`));

            let bandit1TXT = `❌ <@${bandit1}> er offline`
            let bandit2TXT = `❌ <@${bandit2}> er offline`
            let bandit3TXT = `❌ <@${bandit3}> er offline`
            let bandit4TXT = `❌ <@${bandit4}> er offline`
            let bandit5TXT = `❌ <@${bandit5}> er offline`
            let bandit6TXT = `❌ <@${bandit6}> er offline`
            let bandit7TXT = `❌ <@${bandit7}> er offline`
            let bandit8TXT = `❌ <@${bandit8}> er offline`
            let bandit9TXT = `❌ <@${bandit9}> er offline`
            let bandit10TXT = `❌ <@${bandit10}> er offline`
            let bandit11TXT = `❌ <@${bandit11}> er offline`
            let bandit12TXT = `❌ <@${bandit12}> er offline`

            let count = 0
            if (bandit1ID) {
                count++
                bandit1TXT = `✅ <@${bandit1}> er online`
            } if (bandit2ID) {
                count++
                bandit2TXT = `✅ <@${bandit2}> er online`
            } if (bandit3ID) {
                count++
                bandit3TXT = `✅ <@${bandit3}> er online`
            } if (bandit4ID) {
                count++
                bandit4TXT = `✅ <@${bandit4}> er online`
            } if (bandit5ID) {
                count++
                bandit5TXT = `✅ <@${bandit5}> er online`
            } if (bandit6ID) {
                count++
                bandit6TXT = `✅ <@${bandit6}> er online`
            } if (bandit7ID) {
                count++
                bandit7TXT = `✅ <@${bandit7}> er online`
            } if (bandit8ID) {
                count++
                bandit8TXT = `✅ <@${bandit8}> er online`
            } if (bandit9ID) {
                count++
                bandit9TXT = `✅ <@${bandit9}> er online`
            } if (bandit10ID) {
                count++
                bandit10TXT = `✅ <@${bandit10}> er online`
            } if (bandit11ID) {
                count++
                bandit11TXT = `✅ <@${bandit11}> er online`
            } if (bandit12ID) {
                count++
                bandit12TXT = `✅ <@${bandit12}> er online`
            }

            const roleIDs = ["985677076113797130", "957728917236621388"];
            
            let channel = client.guilds.cache.get('946746668328570880')?.channels.cache.get('1004407995549102202') as TextChannel;
            let commandissuer = member.displayName;

            if (member.roles.cache.some(role => roleIDs.includes(role.id as string))) {
                if(member.id === "693935090186715196") return
                await interaction.reply({
                    embeds: [
                        new MessageEmbed()
                            .setColor("#00FF00")
                            .setTitle(`Er det her på grænsen af META? Naaaaah, det er ikke.`)
                            .setDescription(`${bandit1TXT}\n${bandit2TXT}\n${bandit3TXT}\n${bandit4TXT}\n${bandit5TXT}\n${bandit6TXT}\n${bandit7TXT}\n${bandit8TXT}\n${bandit9TXT}\n${bandit10TXT}\n${bandit11TXT}\n${bandit12TXT}`)
                            .setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
                    ],
                    ephemeral: true
                });
                return await channel?.send({
                    embeds: [
                        new MessageEmbed()
                            .setTitle('Meta fra Dabbur')
                            .setDescription(`**Bruger:** ${commandissuer}\n**Kommando:** Dabbur\n**Antal:** ${count}`)
                            .setColor('#0099ff')
                            .setTimestamp()
                            .setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
                        ],
                })
            } else {
                console.log(`${member.displayName} (${member.id}) Forsøgte at bruge /dabbur`)
                return await interaction.reply({
                    embeds: [
                        new MessageEmbed()
                            .setColor("#00FF00")
                            .setTitle(`Lortet virker ikke som det skal...`)
                    ],
                    ephemeral: true
                });
            }
        }).catch (err => {
            console.log(err)
            console.log('Fejl ved kommando /dabbur')
        })
    },
    
} as ICommand;
