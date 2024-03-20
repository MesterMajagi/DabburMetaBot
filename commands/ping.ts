import axios from 'axios';
import { Interaction, MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';


//Make typescript happy
export default {
    category: 'Fun',
    description: 'Test om botten kører',
    
    permissions: [],

    slash: true,
    testOnly: true,

    callback: async ({message, interaction, channel, args}) => {
        let billede = "https://cdn.discordapp.com/attachments/946750725759832084/1000426837253554216/NIKOOOOOOOOO.png"

        return await interaction.reply({
			files: [billede],
			ephemeral: false
		});
    }

    
    
} as ICommand;
