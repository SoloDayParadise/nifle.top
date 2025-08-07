import { getProcessedWeapons } from '$lib/gamedata/processor.js';

/** @type {import('./$types').PageLoad} */
export function load() {
	// Вызываем наши функции-обработчики
	const weapons = getProcessedWeapons();
	const types = [
		{
			id: 'All',
			name: 'All',
			img: '/images/UI/Filter/T_Tab_All.png',
			dist: null
		},
		{
			id: 'Bow',
			name: 'Bow',
			img: '/images/UI/Filter/T_Armory_WeaponType_Bow.png',
			dist: 'RangedType'
		},
		{
			id: 'Cannon',
			name: 'Grenade Launcher',
			img: '/images/UI/Filter/T_Armory_WeaponType_Cannon.png',
			dist: 'RangedType'
		},
		{
			id: 'Crossbow',
			name: 'Dual Pistols',
			img: '/images/UI/Filter/T_Armory_WeaponType_Crossbow.png',
			dist: 'RangedType'
		},
		{
			id: 'Machinegun',
			name: 'Assault Rifle',
			img: '/images/UI/Filter/T_Armory_WeaponType_Machinegun.png',
			dist: 'RangedType'
		},
		{
			id: 'Pistol',
			name: 'Pistol',
			img: '/images/UI/Filter/T_Armory_WeaponType_Pistol.png',
			dist: 'RangedType'
		},
		{
			id: 'Shotgun',
			name: 'Shotgun',
			img: '/images/UI/Filter/T_Armory_WeaponType_Shotgun.png',
			dist: 'RangedType'
		},
		{
			id: 'Claymore',
			name: 'Greatsword',
			img: '/images/UI/Filter/T_Armory_WeaponType_Claymore.png',
			dist: 'RangedType'
		},
		{
			id: 'Dualblade',
			name: 'Dual Blades',
			img: '/images/UI/Filter/T_Armory_WeaponType_Dualblade.png',
			dist: 'RangedType'
		},
		{
			id: 'Katana',
			name: 'Katana',
			img: '/images/UI/Filter/T_Armory_WeaponType_Katana.png',
			dist: 'RangedType'
		},
		{
			id: 'Polearm',
			name: 'Polearm',
			img: '/images/UI/Filter/T_Armory_WeaponType_Polearm.png',
			dist: 'RangedType'
		},
		{
			id: 'Sword',
			name: 'Sword',
			img: '/images/UI/Filter/T_Armory_WeaponType_Sword.png',
			dist: 'RangedType'
		},
		{
			id: 'Swordwhip',
			name: 'Whipsword',
			img: '/images/UI/Filter/T_Armory_WeaponType_Swordwhip.png',
			dist: 'RangedType'
		}
	];

	return {
		weapons,
		types
	};
}
