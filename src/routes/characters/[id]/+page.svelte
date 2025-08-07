<script>
	/** @type {import('./$types').PageData} */
	export let data;

	const { character } = data;

	let level = 1;

	function ceilValue(val) {
		return Math.ceil(val);
	}
</script>

<div class="char-detail-page">
	<div class="back-link-wrapper">
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a href="/characters" class="back-link">
			<svg
				width="121"
				height="65"
				viewBox="0 0 121 65"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 0H121C121 0 103.5 65 83 65H0V0Z" fill="#930104" />
				<path
					d="M53 23C44.6875 23 34 32.5 34 32.5C34 32.5 44.6875 42 53 42C61.3125 42 72 33.6875 72 33.6875C72 33.6875 61.3125 37.25 56.5625 37.25C51.8125 37.25 49.4375 32.5 49.4375 32.5C49.4375 32.5 53 27.75 56.5625 27.75C60.125 27.75 72 31.3125 72 31.3125C72 31.3125 61.3125 23 53 23Z"
					fill="url(#paint0_linear_10_157)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_10_157"
						x1="34"
						y1="32.5"
						x2="72"
						y2="32.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FAF6B6" />
						<stop offset="1" stop-color="white" />
					</linearGradient>
				</defs>
			</svg>
		</a>
	</div>

	<div class="content-wrapper">
		<!-- Левая часть со сплеш-артом -->
		<div class="splash-art-container">
			<img src={character.splashArt} alt={character.name} class="splash-art-image" />
		</div>

		<!-- Правая часть с информацией -->
		<div class="details-panel">
			<div class="header">
				<div class="element">
					<img src="/CommonIcons/T_Armory_{character.attribute}.svg" style="height: 40px" />
				</div>
				<h1 class="char-name">{character.name}</h1>
				<div class="rarity">
					{#each { length: character.rarity } as _}
						<span>
							<svg
								width="20"
								height="20"
								viewBox="0 0 310 307"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M154.695 207.49C171.648 207.49 262.77 260.421 262.77 260.421C266.374 243.469 207.673 177.848 207.673 156.676C207.673 135.503 319.189 7.52929 309.39 0C309.39 0 167.41 97.3931 150.457 97.3931C133.504 97.3931 46.6204 44.4621 46.6204 44.4621C46.6204 44.4621 97.4791 137.621 97.4791 152.441C97.4791 167.262 0 307 0 307C0 307 137.742 207.49 154.695 207.49Z"
									fill="white"
								/>
							</svg>
						</span>
					{/each}
				</div>
			</div>

			<div class="sub-header">
				<!--<span class="element-tag {character.element.toLowerCase()}">{character.element}</span>-->
				<span class="camp-tag">{character.camp}</span>
			</div>

			<div class="stats-section">
				<h2>STATS (Lv. {level})</h2>
				<input class="slider" type="range" min="1" max="80" bind:value={level} />

				<table class="stats-table">
					<tbody>
						<tr>
							<td class="prop">ATK</td>
							<td class="propNum">{ceilValue(character.stats.atk[level])}</td>
						</tr>
						<tr>
							<td class="prop">DEF</td>
							<td class="propNum">{ceilValue(character.stats.def[level])}</td>
						</tr>
						<tr>
							<td class="prop">Max HP</td>
							<td class="propNum">{ceilValue(character.stats.maxHp[level])}</td>
						</tr>
						<tr>
							<td class="prop">Max Sanity</td>
							<td class="propNum">{ceilValue(character.stats.maxEs[level])}</td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- Здесь можно добавить еще секции: биография, скиллы и т.д. -->
		</div>
	</div>
</div>

<style>
  .propNum {
    text-align: right;
  }
  .pron {
    text-align: left;
  }
	.char-detail-page {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		color: #e0e0e0;
	}

	.back-link-wrapper {
		margin-bottom: 2rem;
		background-color: rgba(26, 26, 26, 0.9);
	}

	.back-link svg {
		vertical-align: middle;
		display: inline-block; /* или inline-block, если хочешь сохранить поток */
	}

	.back-link {
		color: #a0a0a0;
		text-decoration: none;
		font-size: 1rem;
		transition: color 0.2s;
	}
	.back-link:hover {
		color: #fff;
	}

	.content-wrapper {
		display: flex;
		gap: 2.5rem;
		background-color: rgba(26, 26, 26, 0.7);
		padding: 2rem;
		backdrop-filter: blur(5px);
	}

	.splash-art-container {
		flex: 0 0 40%;
	}

	.splash-art-image {
		width: 100%;
		border-radius: 12px;
		object-fit: cover;
		border: 2px solid #444;
	}

	.details-panel {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.header {
		display: flex;
		align-items: baseline;
		gap: 1rem;
		border-bottom: 2px solid #930104;
		padding-bottom: 0.5rem;
	}

	.char-name {
		font-size: 2.8rem;
		margin: 0;
		color: #fff;
	}

	.rarity {
		font-size: 1.5rem;
		color: #f1c40f;
	}

	.sub-header {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.element-tag {
		padding: 0.3rem 0.8rem;
		border-radius: 16px;
		font-weight: bold;
		color: #fff;
		text-transform: uppercase;
		font-size: 0.9rem;
	}

	.camp-tag {
		font-style: italic;
		color: #a0a0a0;
	}

	.stats-section {
		margin-top: 2rem;
	}

	input[type='range'] {
		width: 100%;
		margin: 1rem 0;
		cursor: pointer;
	}
	.slider {
		-webkit-appearance: none; /* Override default CSS styles */
		appearance: none;
		width: 100%;
		height: 20px;
		background: #363636; /* Grey background */
		outline: none; /* Remove outline */
		opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
		-webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
		transition: opacity 0.2s;
	}
	.slider::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		width: 10px; /* Set a specific slider handle width */
		height: 25px; /* Slider handle height */
		background: #ed0005; /* Green background */
		cursor: pointer; /* Cursor on hover */
	}

	.slider::-moz-range-thumb {
		width: 25px; /* Set a specific slider handle width */
		height: 25px; /* Slider handle height */
		background: #ed0005; /* Green background */
		cursor: pointer; /* Cursor on hover */
	}

	.stats-table {
		width: 100%;
		border-collapse: collapse;
	}

	.stats-table td {
		border: 0px solid #ccc;
		background-color: #303030;
		padding: 0.5rem;
	}

	/* Адаптивность для мобильных */
	@media (max-width: 900px) {
		.content-wrapper {
			flex-direction: column;
		}
		.splash-art-container {
			flex: 0 0 auto; /* Убираем жесткую ширину */
		}
		.char-name {
			font-size: 2rem;
		}
	}
</style>
