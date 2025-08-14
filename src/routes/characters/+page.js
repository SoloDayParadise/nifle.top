import { getProcessedCharacters } from '$lib/gamedata/processor.js';

/** @type {import('./$types').PageLoad} */
export function load() {
	// Вызываем наши функции-обработчики
	const characters = getProcessedCharacters();
	const elements = [
		{
			id: 'Water',
			name: 'Hydro',
			img: '/images/UI/Filter/T_Tab_Water.png'
		},
		{ id: 'Fire', name: 'Pyro', img: '/images/UI/Filter/T_Tab_Fire.png' },
		{ id: 'Thunder', name: 'Electro', img: '/images/UI/Filter/T_Tab_Thunder.png' },
		{ id: 'Wind', name: 'Anemo', img: '/images/UI/Filter/T_Tab_Wind.png' },
		{ id: 'Light', name: 'Lumino', img: '/images/UI/Filter/T_Tab_Light.png' },
		{
			id: 'Dark',
			name: 'Umbro',
			img: '/images/UI/Filter/T_Tab_Dark.png'
		}
	];

	// И передаем чистые данные на страницу
	return {
		characters,
		elements
	};
}
