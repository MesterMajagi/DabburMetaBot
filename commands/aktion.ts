import { ButtonInteraction, MessageActionRow, MessageButton } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
    category: 'Aktion',
    description: 'Box til aktionsstyrring',
    permissions: ['ADMINISTRATOR'],
    slash: true,
    testOnly: false,

    callback: async ({ interaction, channel, client}) => {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('Start')
                    .setLabel('Start')
                    .setStyle('SUCCESS')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('Stop')
                    .setLabel('Stop')
                    .setStyle('DANGER')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('Reset')
                    .setLabel('Reset')
                    .setStyle('SECONDARY')
            )

        await interaction.reply({
            content: 'Velkommen til aktionsstyrring',
            components: [row],
            ephemeral: true
        });

        const collector = channel.createMessageComponentCollector({
            max: 1,
            time: 1000 * 15
        });

        collector.on('end', (collection) => {
            if (collection.first()?.customId === 'Start') {
                client.on('message', (message) => {
                    if (message.channel.id === '1007036815435366501') {
                        
                    }
                })
            } else if (collection.first()?.customId === 'Stop') {
                console.log('Stop');
            } else if (collection.first()?.customId === 'Reset') {
                console.log('Reset');
            } else {
                console.log('Unknown');
            }
    })

        

    }

 } as ICommand;