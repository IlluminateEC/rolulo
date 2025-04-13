<script lang="ts">
	import '../app.css';
</script>

<slot></slot>

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
</style>
