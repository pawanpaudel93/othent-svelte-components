<script lang="ts">
	import './LoginButton.css';
	import Logo from '../Logo';
	import LoginButtonText from '../Extras/LoginButtonText.svelte';
	import { userData } from '$lib/stores';
	import type { LogInReturnProps } from 'othent';
	import { createEventDispatcher } from 'svelte';
	import {
		LOGIN_BUTTON_BACKGROUND_COLOR,
		LOGIN_BUTTON_COLOR,
		LOGIN_BUTTON_FONT_SIZE,
		LOGIN_BUTTON_HEIGHT,
		LOGIN_BUTTON_WIDTH,
		LOGO_HEIGHT,
		LOGO_WIDTH
	} from '$lib/constants';
	import { getOthent } from '$lib/utils';

	export let apiid: string;
	export let buttonHeight: string = LOGIN_BUTTON_HEIGHT;
	export let buttonWidth: string = LOGIN_BUTTON_WIDTH;
	export let fontSize: string = LOGIN_BUTTON_FONT_SIZE;
	export let logoHeight: number = LOGO_HEIGHT;
	export let logoWidth: number = LOGO_WIDTH;
	export let backgroundColor: string = LOGIN_BUTTON_BACKGROUND_COLOR;
	export let color: string = LOGIN_BUTTON_COLOR;
	let clicked = false;

	const dispatch = createEventDispatcher();

	async function login() {
		clicked = true;
		try {
			const othent = await getOthent(apiid);
			const loginResponse = await othent.logIn();
			userData.set(loginResponse);
			dispatch('login', loginResponse as LogInReturnProps);
		} catch (e) {
			console.log('othent.login() failed:');
			console.log(e);
		} finally {
			clicked = false;
		}
	}
</script>

<button
	class="othent-button-login"
	disabled={clicked}
	on:click={login}
	style={`width: ${buttonWidth}; height: ${buttonHeight}; font-size: ${fontSize}; background-color: ${backgroundColor}; color: ${color}`}
	{...$$restProps}
>
	<slot name="logo"><Logo height={logoHeight} width={logoWidth} /></slot>
	{#if $$slots.default}
		<slot />
	{:else}
		<LoginButtonText />
	{/if}
</button>
