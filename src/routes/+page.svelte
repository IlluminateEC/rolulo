<script lang="ts">
	import { Button, Card } from 'm3-svelte';
	import HandleEntry from '$lib/HandleEntry.svelte';
	import { goto } from '$app/navigation';
	import { login, session } from '$lib/auth';

	let handle_entry: HandleEntry | undefined;
	let handle = $derived(handle_entry?.getHandle());

	if (session) {
		goto(`/profile/${session.sub}`);
	}
</script>

<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
	<Card type="filled" on:click={() => console.log('wawa')}>
		<div style="display: flex; gap: 12px; flex-direction: column; max-width: 80ch;">
			<h1>Welcome to Rulolo!</h1>
			<span>
				Rolulo is an AT Protocol application for managing characters and eventually entire worlds.
				(inspired by Toyhouse)
			</span>
			<HandleEntry bind:this={handle_entry} />
			<div style="display: flex; justify-content: end;">
				<!-- <ButtonLink type="filled" href="./login">Log in with AT Protocol (Bluesky)</ButtonLink> -->
				<Button type="filled" on:click={async () => await login(handle!)}
					>Log in with AT Protocol (Bluesky)</Button
				>
			</div>
		</div>
	</Card>
</div>
