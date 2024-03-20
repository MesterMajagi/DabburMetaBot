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
    expectedArgs: '[Våben] [Antal skud]',

    slash: true,
    testOnly: true,

    callback: async ({message, interaction, channel, args, member}) => {
		//Ceramic skud = 245 sorte, 8.5 krudt, 4.5 aluminium
		//Heavy rifle skud = 900 sorte, 30 krudt, 13.5 aluminium
		//mk1 skud = 235 sorte, 8 krudt, 4.5 aluminium
		//UZI skud = 650 sorte, 21 krudt, 10 aluminium

		//var ceramicskud_sorte = 245;
		//var ceramicskud_krudt = 8.5;
		//var ceramicskud_aluminium = 4.5;
		//var heavyrifleskud_sorte = 900;
		//var heavyrifleskud_krudt = 30;
		//var heavyrifleskud_aluminium = 13.5;
		//var mk1skud_sorte = 235;
		//var mk1skud_krudt = 8;
		//var mk1skud_aluminium = 4.5;
		//var uziskud_sorte = 650;
		//var uziskud_krudt = 21;
		//var uziskud_aluminium = 10;
        //var minismgskud_sorte = 650;
		//var minismgskud_krudt = 20;
		//var minismgskud_aluminium = 9;
		//var deagleskud_sorte = 600;
		//var deagleskud_krudt = 15;
		//var deagleskud_aluminium = 8;
		//var mk2skud_sorte = 235;
		//var mk2skud_krudt = 80;
		//var mk2skud_aluminium = 4.5;
		//var mk1skud_sorte = 235;
		//var mk1skud_krudt = 8;
		//var mk1skud_aluminium = 4.5;
		//var heavypistolskud_sorte = 500;
		//var heavypistolskud_krudt = 10;
		//var heavypistolskud_aluminium = 7;

		// 1x Revolver 650 sorte 7 Alu 15 Krudt
		// 1x PMX 750 sorte 8.5 alu 20 krudt
		// 1x Ceramic 245 sorte 4.5 alu 8.5 krudt
		// 1x Heavy Pistol 500 sorte 6 alu 10 krudt
		// 1x Heavy rifle 900 sorte 13.5 alu 30 krudt 
		// 1x Tec-9 750 sorte 8 alu 20 krudt
		// 1x Uzi 650 sorte 10 Alu 21 Krudt

		var revolversorte = 650;
		var revolverkrudt = 15;
		var revolveralu = 7;
		var pmxsorte = 750;
		var pmxkrudt = 20;
		var pmxalu = 8.5;
		var ceramicsorte = 245;
		var ceramickrudt = 8.5;
		var ceramicalu = 4.5;
		var heavypistolsorte = 500;
		var heavypistolkrudt = 10;
		var heavypistolalu = 6;
		var heavyriflesorte = 900;
		var heavyriflekrudt = 30;
		var heavyriflealu = 13.5;
		var tec9sorte = 750;
		var tec9krudt = 20;
		var tec9alu = 8;
		var uzisorte = 650;
		var uzikrudt = 21;
		var uzialu = 10;

		const våben = args[0].toUpperCase()
        const antalskud = parseInt(args[1])

		if (våben === "REVOLVER") {
			var sorte = revolversorte;
			var krudt = revolverkrudt;
			var aluminium = revolveralu;
		} else if (våben === "PMX") {
			var sorte = pmxsorte;
			var krudt = pmxkrudt;
			var aluminium = pmxalu;
		} else if (våben === "CERAMIC") {
			var sorte = ceramicsorte;
			var krudt = ceramickrudt;
			var aluminium = ceramicalu;
		} else if (våben === "HEAVY PISTOL") {
			var sorte = heavypistolsorte;
			var krudt = heavypistolkrudt;
			var aluminium = heavypistolalu;
		} else if (våben === "HEAVY RIFLE") {
			var sorte = heavyriflesorte;
			var krudt = heavyriflekrudt;
			var aluminium = heavyriflealu;
		} else if (våben === "TEC-9") {
			var sorte = tec9sorte;
			var krudt = tec9krudt;
			var aluminium = tec9alu;
		} else if (våben === "UZI") {
			var sorte = uzisorte;
			var krudt = uzikrudt;
			var aluminium = uzialu;
		} else {
			return await interaction.reply({
			embeds: [
				new MessageEmbed()
					.setColor("#FF0000")
					.setTitle("❌ Fejl - Dette våben findes ikke.")
					.setDescription('**Følgende våben findes:**\nRevolver\nPMX\nCeramic\nHeavy Pistol\nHeavy rifle\nTec-9\nUzi\n\n*Andre våben kan der ikke laves skud til PT*')
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
					.setTitle(`${addDot(antalskud)}x ${våben} skud`)
					.setDescription(`${addDot(antalskud * sorte)} Lovlige moneter\n${addDot(antalskud * krudt)} Krudt\n${addDot(antalskud * aluminium)} Aluminium bar`)
					.setFooter({ text: 'Lavet af ham der Majagi#6882', iconURL: 'https://cdn.discordapp.com/attachments/974650316769333329/974664423987896351/NIKOOOOOOOOO.png' })
			],
			ephemeral: false
		});
    }

    
    
} as ICommand;
