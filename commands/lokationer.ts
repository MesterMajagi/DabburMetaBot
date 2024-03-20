import axios from 'axios';
import { Interaction, MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';


//Make typescript happy
export default {
    category: 'NightLifeRP',
    description: 'Hent alle lokationer',
    
    permissions: [],

    slash: true,
    testOnly: true,

    callback: async ({message, interaction, channel, args}) => {

        const AMF_PULVER_TXT = '8198 - AMF Pulver'
        const AMF_KEMI_TXT = '3057 - AMF Kemi'
        const AMF_OMDAN_TXT = '2027 - AMF Omdan'
        const PARKERINGSHUS8077TXT = '8077 - Parkeringshus'
        const KIRKEGAARDTXT = '7029 - Kirkegård'

        const AMF_PULVER_GPS = ''
        const AMF_KEMI_GPS = ''
        const AMF_OMDAN_GPS = ''
        const PARKERINGSHUS8077_GPS = 'GPS:-732.76489257813,-738.99163818359'
        const KIRKEGAARD_GPS = 'GPS:-1661.8758544922,-296.34680175781'
        
    }

    
    
} as ICommand;
