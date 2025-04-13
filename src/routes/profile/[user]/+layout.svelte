<script lang="ts"></script>

<div class="navigation-pane">
	<slot name="navigation"></slot>
</div>
<div class="content-pane">
	<slot></slot>
</div>

<style>
	:global(body) {
		margin: unset;
	}

	:root {
		background-color: rgb(var(--m3-scheme-surface-container-low));
	}

	.navigation-pane {
		min-width: 240px;
		background-color: rgb(var(--m3-scheme-surface-container-high));
	}

	.content-pane {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 24px;
	}
</style>
