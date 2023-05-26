<script lang="ts">
	import './LogoutButton.css';
	import { userData } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	import type { LogOutReturnProps } from 'othent';
	import {
		LOGOUT_BUTTON_BACKGROUND_COLOR,
		LOGOUT_BUTTON_COLOR,
		LOGOUT_BUTTON_FONT_SIZE,
		LOGOUT_BUTTON_HEIGHT,
		LOGOUT_BUTTON_WIDTH
	} from '$lib/constants';
	import { getOthent } from '$lib/utils';

	export let apiid: string;
	export let buttonHeight: string = LOGOUT_BUTTON_HEIGHT;
	export let buttonWidth: string = LOGOUT_BUTTON_WIDTH;
	export let fontSize: string = LOGOUT_BUTTON_FONT_SIZE;
	export let color: string = LOGOUT_BUTTON_COLOR;
	export let backgroundColor = LOGOUT_BUTTON_BACKGROUND_COLOR;
	let hoverColor = `${color}11`;
	let isHovered = false;
	let clicked = false;

	const dispatch = createEventDispatcher();

	async function logout() {
		clicked = true;
		try {
			const othent = await getOthent(apiid);
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

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button
	class="othent-button-logout"
	disabled={clicked}
	on:click={logout}
	style={`width: ${buttonWidth}; height: ${buttonHeight}; font-size: ${fontSize}; color: ${color}; border: 1px solid ${color}; background-color: ${
		isHovered ? hoverColor : backgroundColor
	};`}
	on:mouseover={() => (isHovered = true)}
	on:mouseout={() => (isHovered = false)}
	{...$$restProps}
>
	{#if $$slots.default}
		<slot />
	{:else}
		Log Out
	{/if}
</button>
