<script>
	// Получаем данные, загруженные в `+page.js`
	/** @type {import('./$types').PageData} */
	export let data;

	const { characters, elements } = data;

	let activeFilter = null;

	$: filteredCharacters = activeFilter
		? characters.filter((char) => char.attribute === activeFilter)
		: characters;

	function charRarityToColor(rarityNum) {
		if (rarityNum == 5) return '#CEB385';
		else if (rarityNum == 4) return '#B293BC';
		else return '#151515';
	}
</script>

<div class="page-wrapper">
	<h1>CHARACTERS</h1>

	<!-- Фильтры -->
	<div class="filter-bar">
		{#each elements as element}
			<div class="tooltip-wrapper">
				<button
					class="filter-button"
					class:active={activeFilter === element.id}
					on:click={() => (activeFilter = activeFilter === element.id ? null : element.id)}
				>
					<img src={element.img} alt={element.name} style="height: 40px" />
				</button>
				<div class="tooltip-text">{element.name}</div>
			</div>
		{/each}
	</div>

	<!-- Сетка с персонажами -->
	<div class="item-grid">
		{#each filteredCharacters as character (character.id)}
			<!-- Используем slug (это ID персонажа) для ссылки -->
			<a href="/characters/{character.id}" class="item-card">
				<img
					src="/CommonIcons/T_Armory_{character.attribute}.svg"
					alt="Attribute"
					class="item-attribute"
				/>
				<div class="item-top">
					<img
						src={character.icon}
						alt={character.name}
						class="item-image"
						style="background-image: linear-gradient(to top, {charRarityToColor(
							character.rarity
						)}, #151515)"
					/>
				</div>
				<div class="item-info">
					<span class="item-name">{character.name}</span>
					<!-- Используем название стихии -->
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	/* Добавляем переменные для цветов стихий */
	:root {
		--lumino-color: #f1c40f; /* Light */
		--umbro-color: #ff33d3; /* Dark */
		--hydro-color: #3498db; /* Water */
		--pyro-color: #e74c3c; /* Fire */
		--electro-color: #8612f3; /* Thunder */
		--anemo-color: #2ecc71; /* Wind */
	}

	.page-wrapper {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	h1 {
		color: #fff;
		border-bottom: 2px solid #930104;
		padding-bottom: 0.5rem;
		margin-block-end: 0;
		font-family: Advent Pro;
		margin-top: 0%;
		font-size: -webkit-xxx-large;
	}

	.filter-bar {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.filter-button {
		background-color: #2c2c2c;
		color: #a0a0a0;
		border: 1px solid #444;
		padding: 0.2rem 0.4rem;
		border-radius: 15px;
		cursor: pointer;
		transition: all 0.2s;
	}

	.filter-button:hover {
		background-color: #3a3a3a;
		color: #fff;
	}

	.filter-button.active {
		background-color: #c0392b;
		color: #fff;
		border-color: #c0392b;
	}

	.item-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 1.5rem;
	}

	.item-card {
		background-color: #1a1a1a;
		border-radius: 12px;
		overflow: hidden;
		text-decoration: none;
		color: #e0e0e0;
		border: 1px solid #333;
		transition:
			transform 0.01s,
			box-shadow 0.01s;
	}

	.item-top {
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.item-card:hover {
		/* transform: scale(1.2); */
		box-shadow: 0 5px 15px rgba(133, 133, 133, 0.925);
	}

	.item-image {
		width: 100%;
		height: 150px; /* Фиксированная высота для единообразия */
		object-fit: cover;
		/* background-color: #2c2c2c; */
	}

	.item-info {
		padding: 0.7rem;
		padding-top: 0%;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.item-name {
		font-weight: 500;
		margin-top: 0.6rem;
	}
	.item-attribute {
		height: 30px;
		position: absolute;
		margin-top: 0.5rem;
		margin-left: 0.5rem;
		background-color: #151515;
		padding: 0.3rem 0.7rem;
		border-radius: 6px;
	}

	.tooltip-wrapper {
		position: relative;
		display: inline-block;
	}

	.tooltip-text {
		visibility: hidden;
		background-color: #161616;
		color: #fff;
		text-align: center;
		font-family: Advent Pro;
		border-radius: 5px;
		padding: 5px;
		position: absolute;
		z-index: 1;
		top: 110%; /* над кнопкой */
		left: 50%;
		transform: translateX(-50%);
		opacity: 0;
		transition: opacity 0.2s;
		white-space: nowrap;
	}

	.tooltip-wrapper:hover .tooltip-text {
		visibility: visible;
		opacity: 0.8;
	}
</style>
