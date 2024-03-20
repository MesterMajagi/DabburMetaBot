import { ICommand } from 'wokcommands';

export default {
    category: 'Admin',
    description: 'Bare en clear kommando',
    permissions: ['ADMINISTRATOR'],
    maxArgs: 1,
    minArgs: 1,
    expectedArgs: '[Antal]',
    slash: true,
    testOnly: false,

    callback: async ({ message, interaction, channel, args }) => {
        const amount = parseInt(args[0]);
        if (amount > 100) {
            return await interaction.reply({
                embeds: [
                    {
                        title: 'Hov!',
                        description: 'Du kan ikke clear mere end 100.',
                        color: 0xFF0000,
                    },
                ],
            });
        } if (amount < 1) {
            return await interaction.reply({
                embeds: [
                    {
                        title: 'Hov!',
                        description: 'Du kan ikke clear mindre end 1.',
                        color: 0xFF0000,
                    },
                ],
            });
        }
        await channel.bulkDelete(amount);
        return await interaction.reply({
            embeds: [
                {
                    title: 'Success!',
                    description: 'Du har fjernet ' + amount + ' beskeder.',
                    color: 0x00FF00,
                },
            ],
            ephemeral: true,
        });
    }

 } as ICommand;