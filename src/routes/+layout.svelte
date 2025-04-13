<script lang="ts">
	import '../app.css';
</script>

<div class="main-split">
	<slot></slot>
</div>
<div class="footer">
	<span
		><a href="https://github.com/IlluminateEC/rolulo">Rolulo</a> ©
		<a href="https://kazani.dev">Ohin "Kazani" Taylor</a> and the Rolulo contributors.</span
	>
	<span>🧡 Generously hosted by <a href="https://pages.dev">Cloudflare Pages</a> for free! 🧡</span>
</div>

<style>
	:root {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	:global(h1, h2, h3, h4, h5, h6),
	:root {
		font-family: var(--m3-font);
		margin: unset;
	}

	.main-split {
		display: flex;
		flex-grow: 1;
		position: sticky;
		height: 100vh;
	}

	.footer {
		display: flex;
		padding: 24px;
		flex-direction: column;
		align-items: center;
		gap: 12px;

		background-color: rgb(var(--m3-scheme-surface-container-lowest));
	}

	:global(a) {
		color: rgb(var(--m3-scheme-primary));
	}
</style>
