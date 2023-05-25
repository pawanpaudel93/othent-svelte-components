<script lang="ts">
	import './OthentLogin.css';
	import { createEventDispatcher } from 'svelte';
	import { ModalLocation } from '$lib/types';
	import { userData } from '$lib/stores';
	import Avatar from '../Avatar';
	import LoginButton from '../LoginButton';
	import LogoutButton from '../LogoutButton';
	import UserInfo from '../UserInfo';
	import Modal from '../Modal';

	import type { LogInReturnProps, LogOutReturnProps } from 'othent';

	export let location: ModalLocation = ModalLocation.bottom;
	export let apiid: string;

	const dispatch = createEventDispatcher();

	function onLogin(event: CustomEvent<LogInReturnProps>) {
		const userData = event.detail;
		setUserData(userData);
		dispatch('login', userData);
	}

	function onLogout(event: CustomEvent<LogOutReturnProps>) {
		const logoutResponse = event.detail;
		logoutResponse.response && setUserData(null);
		dispatch('logout', logoutResponse);
	}

	function setUserData(data: LogInReturnProps | null) {
		userData.set(data);
	}
</script>

<div class="othent-login">
	{#if $userData === null}
		<LoginButton on:login={onLogin} {apiid} />
	{:else}
		<Modal {location}>
			<div slot="parent">
				{#if $$slots.default}
					<slot />
				{:else}
					<Avatar username={$userData.name} src={$userData.picture} />
				{/if}
			</div>

			<div class="othent-login othent-login-modal-children">
				<UserInfo userdata={$userData} />
				<LogoutButton on:logout={onLogout} {apiid} />
			</div>
		</Modal>
	{/if}
</div>
