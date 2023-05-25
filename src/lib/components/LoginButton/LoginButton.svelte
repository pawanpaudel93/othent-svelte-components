<script lang="ts">
	import './LoginButton.css';
	import { Othent } from 'othent';
	import Logo from '../Logo';
	import { userData } from '$lib/stores';
	import type { LogInReturnProps } from 'othent';
	import { createEventDispatcher } from 'svelte';

	export let apiid: string;
	let clicked = false;

	const dispatch = createEventDispatcher();

	async function login() {
		clicked = true;
		try {
			const othent = await Othent({ API_ID: apiid });
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

<button class="othent-button-login" disabled={clicked} on:click={login} {...$$restProps}>
	<Logo />
	{#if $$slots.default}
		<slot />
	{:else}
		Login&nbsp;with&nbsp;
		<span class="othent-button-login-brandname">Othent</span>
	{/if}
</button>
