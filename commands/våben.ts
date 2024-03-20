import axios from 'axios';
import { Interaction, MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';


//Make typescript happy
export default {
    category: 'Fun',
    description: 'Liste over våben',
    
    permissions: [],

    slash: true,
    testOnly: true,

    callback: async ({message, interaction, channel, args}) => {
        return await interaction.reply({
			embeds: [
				new MessageEmbed()
					.setColor("#00FF00")
					.setTitle(`Våben oversigt`)
					.setDescription(`AK\nTEC-9\nMINI-SMG\nDEAGLE\nHEAVYPISTOL\nMK2\nMK1`)
					.setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
			],
			ephemeral: true
		});
    }

    
    
} as ICommand;
