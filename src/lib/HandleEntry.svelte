<script lang="ts">
	let handle_internal: string | undefined;
	let entry: HTMLInputElement;

	function isBskySocial(): boolean {
		if (handle_internal === undefined) {
			return true;
		}

		return !(handle_internal.includes('.') || handle_internal.includes(':'));
	}

	export function getHandle(): string | undefined {
		if (handle_internal === undefined) {
			return undefined;
		}

		if (isBskySocial()) {
			return `${handle_internal}.bsky.social`;
		}

		return handle_internal;
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="handle-entry" on:click={() => entry.focus()}>
	<input type="text" bind:value={handle_internal} bind:this={entry} />

	{#if isBskySocial()}
		<span>.bsky.social</span>
	{/if}
</div>

<style>
	.handle-entry {
		position: relative;
		display: flex;

		background-color: rgb(var(--m3-scheme-surface-container-high));
		padding: 8px;
		border-radius: 8px;
		cursor: text;
	}

	input {
		flex-grow: 1;
		background-color: unset;
		border: unset;
		outline: unset;
	}

	.handle-entry:focus-within {
		outline-color: rgb(var(--m3-scheme-primary));
		outline-style: solid;
		outline-offset: 1px;
		outline-width: 2px;
	}

	span {
		color: var(--m3-scheme-on-surface-variant);
		user-select: none;
	}
</style>
