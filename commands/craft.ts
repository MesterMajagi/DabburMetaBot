import axios from 'axios';
import { Interaction, MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';


//Make typescript happy
export default {
    category: 'Fun',
    description: 'Få opskrift på noget feeeeeeeed!',
    
    permissions: [],
    
    maxArgs: 2,
    minArgs: 2,
    expectedArgs: '[våben] [antal]',

    slash: true,
    testOnly: true,

    callback: async ({message, interaction, channel, args, member}) => {
        const våben = args[0].toUpperCase()
        const antal = parseInt(args[1])

        var akblueprint = 1;
		var akplastik = 500;
		var akmethamfetamin = 2000;
		var akheroin = 2000;
		var akkokain = 2000;
		var akamfetamin = 2000;
		var akhash = 2000;
		var aksvampe = 2000;
		var akaluminium = 150;
		var akpenge = 11500000;

		var tecblueprint = 1;
		var tecplastik = 300;
		var tecmethamfetamin = 1500;
		var techeroin = 1500;
		var teckokain = 1500;
		var tecamfetamin = 1500;
		var techash = 1500;
		var tecsvampe = 1500;
		var tecaluminium = 100;
		var tecpenge = 10000000;
		
		var heavyblueprint = 1;
		var heavyplastik = 175;
		var heavymethamfetamin = 1000;
		var heavyheroin = 1000;
		var heavykokain = 1000;
		var heavyamfetamin = 1000;
		var heavyhash = 1000;
		var heavysvampe = 1000;
		var heavyaluminium = 75;
		var heavypenge = 3250000;
		
		var mk2blueprint = 1;
		var mk2plastik = 125;
		var mk2methamfetamin = 500;
		var mk2heroin = 500;
		var mk2kokain = 500;
		var mk2amfetamin = 500;
		var mk2hash = 500;
		var mk2svampe = 500;
		var mk2aluminium = 50;
		var mk2penge = 1250000;
		
		var minismgblueprint = 1;
		var minismgplastik = 400;
		var minismgmethamfetamin = 1750;
		var minismgheroin = 1750;
		var minismgkokain = 1750;
		var minismgamfetamin = 1750;
		var minismgsvampe = 1750;
		var minismghash = 1750;
		var minismgaluminium = 120;
		var minismgpenge = 10000000;
		
		var deagleblueprint = 1;
		var deagleplastik = 225;
		var deaglemethamfetamin = 1200;
		var deagleheroin = 1200;
		var deaglekokain = 1200;
		var deagleamfetamin = 1200;
		var deaglehash = 1200;
		var deaglesvampe = 1200;
		var deaglealuminium = 100;
		var deaglepenge = 4250000;

        if (våben === "AK") {
			var blueprint = antal * akblueprint;
			var plastik = antal * akplastik;
			var methamfetamin = antal * akmethamfetamin;
			var heroin = antal * akheroin;
			var kokain = antal * akkokain;
			var amfetamin = antal * akamfetamin;
			var hash = antal * akhash;
			var svampe = antal * aksvampe;
			var aluminium = antal * akaluminium;
			var penge = antal * akpenge;
		} else if (våben === "TEC-9") {
			var blueprint = antal * tecblueprint;
			var plastik = antal * tecplastik;
			var methamfetamin = antal * tecmethamfetamin;
			var heroin = antal * techeroin;
			var kokain = antal * teckokain;
			var amfetamin = antal * tecamfetamin;
			var hash = antal * techash;
			var svampe = antal * tecsvampe;
			var aluminium = antal * tecaluminium;
			var penge = antal * tecpenge;
		} else if (våben === "MK2") {
			var blueprint = antal * mk2blueprint;
			var plastik = antal * mk2plastik;
			var methamfetamin = antal * mk2methamfetamin;
			var heroin = antal * mk2heroin;
			var kokain = antal * mk2kokain;
			var amfetamin = antal * mk2amfetamin;
			var hash = antal * mk2hash;
			var svampe = antal * mk2svampe;
			var aluminium = antal * mk2aluminium;
			var penge = antal * mk2penge;
		} else if (våben === "HEAVYPISTOL") {
			var blueprint = antal * heavyblueprint;
			var plastik = antal * heavyplastik;
			var methamfetamin = antal * heavymethamfetamin;
			var heroin = antal * heavyheroin;
			var kokain = antal * heavykokain;
			var amfetamin = antal * heavyamfetamin;
			var hash = antal * heavyhash;
			var svampe = antal * heavysvampe;
			var aluminium = antal * heavyaluminium;
			var penge = antal * heavypenge;
		} else if (våben === "MINI-SMG") {
			var blueprint = antal * minismgblueprint;
			var plastik = antal * minismgplastik;
			var methamfetamin = antal * minismgmethamfetamin;
			var heroin = antal * minismgheroin;
			var kokain = antal * minismgkokain;
			var amfetamin = antal * minismgamfetamin;
			var hash = antal * minismghash;
			var svampe = antal * minismgsvampe;
			var aluminium = antal * minismgaluminium;
			var penge = antal * minismgpenge;
		} else if (våben === "DEAGLE") {
			var blueprint = antal * deagleblueprint;
			var plastik = antal * deagleplastik;
			var methamfetamin = antal * deaglemethamfetamin;
			var heroin = antal * deagleheroin;
			var kokain = antal * deaglekokain;
			var amfetamin = antal * deagleamfetamin;
			var hash = antal * deaglehash;
			var svampe = antal * deaglesvampe;
			var aluminium = antal * deaglealuminium;
			var penge = antal * deaglepenge;
		} else {
			return await interaction.reply({
			embeds: [
				new MessageEmbed()
					.setColor("#FF0000")
					.setTitle("❌ Fejl - Dette våben findes ikke.")
					.setDescription('**Følgende våben findes:**\nAK\nTEC-9\nMINI-SMG\nDEAGLE\nHEAVYPISTOL\nMK2\n\n*Andre våben kan der ikke laves skud til PT*')
					.setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
			],
			ephemeral: true
		});
	}

    //function to add dot to number of blueprints
	function addDot(number: number) {
		if (number < 1000) {
			return number;
		} else if (number < 1000000) {
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		} else if (number < 1000000000) {
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		} else return 
	}
	if(member.id === "693935090186715196") return
		return await interaction.reply({
			embeds: [
				new MessageEmbed()
					.setColor("#00FF00")
					.setTitle(`${antal}x ${våben}`)
					.setDescription(`${addDot(blueprint)}x Blueprint\n${addDot(plastik)}x Plastik\n${addDot(methamfetamin)}x Methamfetamin\n${addDot(heroin)}x Heroin\n${addDot(kokain)}x Kokain\n${addDot(amfetamin)}x Amfetamin\n${addDot(hash)}x Hash\n${addDot(svampe)}x Svampe\n${addDot(aluminium)}x Aluminium barer\n${addDot(penge)}x Sorte Penge`)
					.setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
			],
			ephemeral: false
		});

    },

    
    
} as ICommand;
