import axios from 'axios';
import { Interaction, MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';


//Make typescript happy
export default {
    category: 'Fun',
    description: 'Hvordan bruges botten?',
    
    permissions: [],

    slash: true,
    testOnly: true,

    callback: async ({message, interaction, channel, args}) => {
        return await interaction.reply({
			embeds: [
				new MessageEmbed()
					.setColor("#00FF00")
					.setTitle(`Usage`)
					.setDescription(`**/skud**\n\nEksempel: /skud våben: P90 antal: 100\nViser hvor mange materialer, som der skal bruges til at lave x antal skud.`)
					.setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
			],
			ephemeral: true
		});
    }

    
    
} as ICommand;
