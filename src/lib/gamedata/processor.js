import charData from './Char.json';
import battleCharData from './BattleChar.json';
import textMap from './TextMap_ContentEN.json';
import weaponData from './Weapon.json';
import levelUpData from './LevelUp.json';

// Кэш для обработанных данных
let processedCharactersCache = null;
let processedWeaponsCache = null;

// Маппинг атрибутов из JSON в понятные нам стихии
const attributeMap = {
	Light: 'Lumino',
	Dark: 'Umbro',
	Water: 'Hydro',
	Fire: 'Pyro',
	Thunder: 'Electro',
	Wind: 'Anemo'
};

/**
 * Генерирует массивы характеристик по уровням
 * @param {object} battleChar - объект с base значениями и ключами для роста
 * @param {Array} levelData - массив из LevelUp.json
 * @returns {{ atk: number[], def: number[], maxHp: number[], maxEs: number[] }}
 */
function generateStatsByLevel(battleChar, levelData) {
	const atkArray = [];
	const defArray = [];
	const hpArray = [];
	const esArray = [];

	for (let i = 0; i < levelData.length; i++) {
		const lvl = levelData[i];
		atkArray.push(battleChar.ATK * (lvl[battleChar.ATKLevelGrow] ?? 1));
		defArray.push(battleChar.DEF * (lvl[battleChar.DEFLevelGrow] ?? 1));
		hpArray.push(battleChar.MaxHp * (lvl[battleChar.MaxHpLevelGrow] ?? 1));
		esArray.push(battleChar.MaxES * (lvl[battleChar.MaxESLevelGrow] ?? 1));
	}

	return {
		atk: atkArray,
		def: defArray,
		maxHp: hpArray,
		maxEs: esArray
	};
}

/**
 * Функция для обработки и объединения данных о персонажах
 * @returns {Array<Object>} Массив с чистыми данными о персонажах
 */
export function getProcessedCharacters() {
	if (processedCharactersCache) {
		return processedCharactersCache;
	}

	const processedCharactersList = [];

	for (const id in charData) {
		const baseChar = charData[id];
		const battleChar = battleCharData[id];

		if (baseChar.IsNotOpen || !battleChar) {
			continue;
		}

		// 1. Имя
		const name = textMap[baseChar.CharName] || baseChar.CharName;

		// 2. Иконка для карточки
		const iconFileName = baseChar.Icon.split('/').pop();
		const icon = `${baseChar.Icon}.png`;

		// 3. Сплеш-арт для детальной страницы
		const splashArtFileName = baseChar.BigIcon.split('/').pop();
		const splashArt = `${baseChar.BigIcon}.png`;

		// 4. Стихия
		const element = attributeMap[battleChar.Attribute] || battleChar.Attribute;
		const levelData = levelUpData;
		const stats = generateStatsByLevel(battleChar, levelData);
		// 5. Собираем все в один удобный объект
		processedCharactersList.push({
			id: id,
			name: name,
			element: element,
			attribute: battleChar.Attribute,
			rarity: baseChar.CharRarity,
			icon: icon,
			splashArt: splashArt, // <-- Добавили сплеш-арт
			camp: baseChar.Camp,
			stats: stats,
			// ... можно добавить любые другие нужные поля
			fullData: {
				base: baseChar,
				battle: battleChar
			}
		});
	}

	processedCharactersList.sort((a, b) => {
		if (b.rarity !== a.rarity) {
			return b.rarity - a.rarity;
		}
		return a.id.localeCompare(b.id);
	});

	processedCharactersCache = processedCharactersList;
	return processedCharactersList;
}

/**
 * Функция для обработки и объединения данных о персонажах
 * @returns {Array<Object>} Массив с чистыми данными о персонажах
 */
export function getProcessedWeapons() {
	if (processedWeaponsCache) {
		return processedWeaponsCache;
	}

	const processedWeaponsList = [];

	for (const id in weaponData) {
		const baseWeapon = weaponData[id];
		// const battleChar = battleCharData[id];

		if (baseWeapon.IsNotOpen) {
			continue;
		}

		// 1. Имя
		const name = textMap[baseWeapon.WeaponName] || baseWeapon.WeaponName;

		// 2. Иконка для карточки
		const iconFileName = baseWeapon.Icon.split('/').pop();
		const icon = `${baseWeapon.Icon}.png`;

		// 3. Сплеш-арт для детальной страницы
		const splashArtFileName = baseWeapon.BigIcon.split('/').pop();
		const splashArt = `${baseWeapon.BigIcon}.png`;

		// 4. Стихия
		// const element = attributeMap[battleChar.Attribute] || battleChar.Attribute;
		if (baseWeapon.GUIPathVariableType === 'Scythe') {
			var type = 'Polearm';
		} else if (baseWeapon.GUIPathVariableType === 'Broadsword') {
			var type = 'Sword';
		} else {
			var type = baseWeapon.GUIPathVariableType;
		}

		// 5. Собираем все в один удобный объект
		processedWeaponsList.push({
			id: id,
			name: name,
			namedId: baseWeapon.GUIPathVariableName,
			type: type,
			rarity: baseWeapon.WeaponRarity,
			icon: icon,
			splashArt: splashArt,
			// stats: {
			// 	atk: battleChar.ATK,
			// 	def: battleChar.DEF,
			// 	maxHp: battleChar.MaxHp,
			// 	maxEs: battleChar.MaxES
			// },
			fullData: {
				base: baseWeapon
			}
		});
	}

	processedWeaponsList.sort((a, b) => {
		if (b.rarity !== a.rarity) {
			return b.rarity - a.rarity;
		}
		return a.id.localeCompare(b.id);
	});

	processedWeaponsCache = processedWeaponsList;
	return processedWeaponsList;
}

/**
 * Функция для получения списка всех уникальных стихий
 * @returns {Array<string>}
 */
export function getElements() {
	const characters = getProcessedCharacters();
	const allElements = new Set(characters.map((c) => c.element));
	return ['All', ...Array.from(allElements).sort()];
}
