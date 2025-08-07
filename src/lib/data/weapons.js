// src/lib/data/weapons.js
export const weaponTypes = ['All', 'Decree', 'Pistol', 'Rifle', 'Launcher'];

export const weapons = [
	{
		slug: 'sacrosanct-decree',
		name: 'Sacrosanct Decree',
		type: 'Decree',
		image: '/images/weapons/sacrosanct-decree.png',
		id: 1
	},
	{
		slug: 'screamshot',
		name: 'Screamshot',
		type: 'Pistol',
		image: '/images/weapons/screamshot.png',
		id: 2
	},
	{
		slug: 'day-of-sacred-verdict',
		name: 'Day of Sacred Verdict',
		type: 'Rifle',
		image: '/images/weapons/day-of-sacred-verdict.png',
		id: 3
	},
	{
		slug: 'helegis-grenade-launcher',
		name: 'Helegis Grenade Launcher',
		type: 'Launcher',
		image: '/images/weapons/helegis-grenade-launcher.png',
		id: 4
	}
	// ... добавьте остальное оружие
];
