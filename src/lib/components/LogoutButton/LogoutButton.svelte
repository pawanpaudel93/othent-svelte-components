<script lang="ts">
	import './LogoutButton.css';
	import { Othent } from 'othent';
	import { userData } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	import type { LogOutReturnProps } from 'othent';
	import {
		LOGOUT_BUTTON_FONT_SIZE,
		LOGOUT_BUTTON_HEIGHT,
		LOGOUT_BUTTON_WIDTH
	} from '$lib/constants';

	export let apiid: string;
	export let buttonHeight: string = LOGOUT_BUTTON_HEIGHT;
	export let buttonWidth: string = LOGOUT_BUTTON_WIDTH;
	export let fontSize: string = LOGOUT_BUTTON_FONT_SIZE;
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

<button
	class="othent-button-logout"
	disabled={clicked}
	on:click={logout}
	style={`width: ${buttonWidth}; height: ${buttonHeight}; font-size: ${fontSize}`}
	{...$$restProps}
>
	{#if $$slots.default}
		<slot />
	{:else}
		Log Out
	{/if}
</button>
