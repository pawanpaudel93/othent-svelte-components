<script lang="ts">
	import './LogoutButton.css';
	import { Othent } from 'othent';
	import { userData } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	import type { LogOutReturnProps } from 'othent';

	export let apiid: string;
	let clicked = false;

	const dispatch = createEventDispatcher();

	async function logout() {
		clicked = true;
		try {
			const othent = await Othent({ API_ID: apiid });
			const logoutResponse = await othent.logOut();
			logoutResponse.response && userData.set(null);
			dispatch('logout', logoutResponse as LogOutReturnProps);
		} catch (e) {
			console.log('othent.logout() failed:');
			console.log(e);
		} finally {
			clicked = false;
		}
	}
</script>

<button class="othent-button-logout" disabled={clicked} on:click={logout} {...$$restProps}>
	{#if $$slots.default}
		<slot />
	{:else}
		Log Out
	{/if}
</button>
