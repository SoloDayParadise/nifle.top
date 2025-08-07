// src/routes/characters/[slug]/+page.js

// Импортируем хелпер для ошибок и нашу функцию-обработчик
import { error } from '@sveltejs/kit';
import { getProcessedCharacters } from '$lib/gamedata/processor.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	// 1. Получаем полный список обработанных персонажей
	const allCharacters = getProcessedCharacters();

	// 2. Находим конкретного персонажа, используя 'slug' из URL.
	//    В нашем случае slug - это ID персонажа (например, "1101").
	const character = allCharacters.find((c) => c.id === params.id);

	// 3. Если персонаж не найден, выбрасываем ошибку 404
	if (!character) {
		throw error(404, `Character with ID ${params.id} not found`);
	}

	// 4. Возвращаем найденный объект персонажа на страницу
	return {
		character
	};
}
