import axios from 'axios';
import { Interaction, MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';


//Make typescript happy
export default {
    category: 'Fun',
    description: 'Billede af Leo',
    
    permissions: [],

    maxArgs: 1,
    minArgs: 1,
    expectedArgs: '[Billede]',

    slash: true,
    testOnly: true,

    callback: async ({message, interaction, channel, args}) => {
        const image = args[0];
        let billede = "";

        if (image === "babyleo") {
            billede = "https://cdn.discordapp.com/attachments/957727852806148128/996874832606154822/Screenshot_20220504-220250_Snapchat.jpg"
        } else if (image === "sharmetrold") {
            billede = "https://cdn.discordapp.com/attachments/957727852806148128/996876701147603096/242776392_294612689170254_5301351871352762504_n.jpg"
        } else if (image === "Niko") {
            billede = "https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png"
        }

        if (billede === "") {
            return await interaction.reply({
                    embeds: [
                        new MessageEmbed()
                            .setColor("#FF0000")
                            .setTitle("❌ Billedet findes ikke!")
                            .setDescription("**Brug en af følgende billeder:**\nBabyleo\nSharmetrold\nNiko")
                            .setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
                    ],
                ephemeral: true
            });
        } else {
        return await interaction.reply({
			files: [billede],
			ephemeral: false
		});
    }
    }

    
    
} as ICommand;
