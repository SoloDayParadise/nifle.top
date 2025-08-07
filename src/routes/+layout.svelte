<script>
	import '../app.css'; // Подключаем глобальные стили
	import { page } from '$app/stores';
</script>

<div class="app-container">
	<nav class="sidebar">
		<a
			href="/"
			class="home-nav-link">
			HOME
		</a>
		<a
			href="/characters"
			class:active={$page.url.pathname.startsWith('/characters')}
			class="nav-link">
			CHARACTERS
		</a>
		<a 
			href="/weapons" 
			class:active={$page.url.pathname.startsWith('/weapons')}
			class="nav-link" >
			WEAPONS
		</a>
	</nav>

	<main class="main-content">
		<slot />
	</main>
</div>

<style>
	.app-container {
		display: flex;
		min-height: 100vh;
		background-color: rgb(0, 0, 0);
		color: #e0e0e0;
	}

	.sidebar {
		width: 10rem;
		background-color: #131313;
		padding: 1rem 1rem;
		border-right: 1px solid #333;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.nav-link {
		color: #a0a0a0;
		text-decoration: none;
		font-size: 1.2rem;
		font-family: Advent Pro;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition:
			background-color 0.2s,
			color 0.2s;
	}
	.home-nav-link {
		color: #a0a0a0;
		text-decoration: none;
		font-size: 3rem;
		font-family: Advent Pro;
		padding: 0.5rem 0.5rem;
		border-radius: 8px;
		font-weight: 800;
	}

	.nav-link:hover {
		background-color: #2a2a2a;
		color: #ffffff;
	}

	.nav-link.active {
		background-color: #c0392b; /* Красный, как в примере */
		color: #ffffff;
		font-weight: bold;
	}

	.main-content {
		flex-grow: 1;
		padding: 2rem;
		overflow-y: auto;
	}
</style>
