import axios from 'axios';
import { Interaction, MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';


//Make typescript happy
export default {
    category: 'Admin',
    description: 'Start af sticky i en kanal',
    
    permissions: [],

    slash: true,
    testOnly: true,

    callback: async ({message, interaction, channel, args}) => {
        return await interaction.reply({
			embeds: [
				new MessageEmbed()
					.setColor("#00FF00")
					.setTitle(`🔩 Craft af våben`)
			],
			ephemeral: false
		});
    }

    
    
} as ICommand;
