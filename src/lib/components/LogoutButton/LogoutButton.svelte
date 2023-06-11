<script lang="ts">
	import './LogoutButton.css';
	import { createEventDispatcher } from 'svelte';
	import {
		LOGOUT_BUTTON_BACKGROUND_COLOR,
		LOGOUT_BUTTON_COLOR,
		LOGOUT_BUTTON_FONT_SIZE,
		LOGOUT_BUTTON_HEIGHT,
		LOGOUT_BUTTON_WIDTH
	} from '$lib/constants';
	import { othentLogout } from '$lib/utils';
	import { isLoading } from '$lib/stores';

	export let apiid: string;
	export let buttonHeight: string = LOGOUT_BUTTON_HEIGHT;
	export let buttonWidth: string = LOGOUT_BUTTON_WIDTH;
	export let fontSize: string = LOGOUT_BUTTON_FONT_SIZE;
	export let color: string = LOGOUT_BUTTON_COLOR;
	export let backgroundColor: string = LOGOUT_BUTTON_BACKGROUND_COLOR;
	let clazz: string = '';
	export let style: string = '';
	export { clazz as class };
	let buttonStyle: string;
	let hoverColor = `${color}11`;
	let isHovered = false;

	const dispatch = createEventDispatcher();

	async function logout() {
		$isLoading = true;
		try {
			const logoutResponse = await othentLogout(apiid);
			if (logoutResponse.response) {
				dispatch('loggedOut', logoutResponse);
			}
		} catch (error) {
			console.error('othent.logout() failed:', error);
		} finally {
			$isLoading = false;
		}
	}

	$: {
		buttonStyle = `
			width: ${buttonWidth};
			height: ${buttonHeight};
			font-size: ${fontSize};
			color: ${color};
			border: 1px solid ${color};
			background-color: ${isHovered ? hoverColor : backgroundColor};
			${style}
		`;
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button
	class="othent-button-logout {clazz}"
	disabled={$isLoading}
	on:click={logout}
	style={buttonStyle}
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
