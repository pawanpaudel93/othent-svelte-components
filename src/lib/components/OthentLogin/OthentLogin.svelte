<script lang="ts">
	import './OthentLogin.css';
	import LoginButtonText from '../Extras/LoginButtonText.svelte';
	import { createEventDispatcher } from 'svelte';
	import { ModalLocation } from '$lib/types';
	import { userData } from '$lib/stores';
	import Avatar from '../Avatar';
	import LoginButton from '../LoginButton';
	import LogoutButton from '../LogoutButton';
	import UserInfo from '../UserInfo';
	import Modal from '../Modal';
	import Logo from '../Logo';
	import {
		LOGIN_BUTTON_HEIGHT,
		LOGIN_BUTTON_WIDTH,
		LOGOUT_BUTTON_HEIGHT,
		LOGOUT_BUTTON_WIDTH,
		LOGIN_BUTTON_FONT_SIZE,
		LOGOUT_BUTTON_FONT_SIZE,
		LOGO_HEIGHT,
		LOGO_WIDTH,
		AVATAR_SIZE,
		USER_INFO_AVATAR_SIZE,
		LOGOUT_BUTTON_BACKGROUND_COLOR,
		LOGIN_BUTTON_BACKGROUND_COLOR,
		LOGOUT_BUTTON_COLOR,
		LOGIN_BUTTON_COLOR
	} from '$lib/constants';

	import type { LogInReturnProps, LogOutReturnProps } from 'othent';

	export let location: ModalLocation = ModalLocation.bottom;
	export let apiid: string;
	export let avatarSize: string = AVATAR_SIZE;
	export let userInfoAvatarSize: string = USER_INFO_AVATAR_SIZE;
	export let loginButtonHeight: string = LOGIN_BUTTON_HEIGHT;
	export let loginButtonWidth: string = LOGIN_BUTTON_WIDTH;
	export let loginButtonFontSize: string = LOGIN_BUTTON_FONT_SIZE;
	export let loginButtonLogoHeight: number = LOGO_HEIGHT;
	export let loginButtonLogoWidth: number = LOGO_WIDTH;
	export let loginButtonColor: string = LOGIN_BUTTON_COLOR;
	export let loginButtonBackgroundColor: string = LOGIN_BUTTON_BACKGROUND_COLOR;
	export let logoutButtonHeight: string = LOGOUT_BUTTON_HEIGHT;
	export let logoutButtonWidth: string = LOGOUT_BUTTON_WIDTH;
	export let logoutButtonFontSize: string = LOGOUT_BUTTON_FONT_SIZE;
	export let logoutButtonBackgroundColor: string = LOGOUT_BUTTON_BACKGROUND_COLOR;
	export let logoutButtonColor: string = LOGOUT_BUTTON_COLOR;

	const dispatch = createEventDispatcher();

	function onLogin(event: CustomEvent<LogInReturnProps>) {
		const userData = event.detail;
		dispatch('loggedIn', userData);
	}

	function onLogout(event: CustomEvent<LogOutReturnProps>) {
		const logoutResponse = event.detail;
		dispatch('loggedOut', logoutResponse);
	}
</script>

<div class="othent-login">
	{#if $userData === null}
		<LoginButton
			on:loggedIn={onLogin}
			{apiid}
			buttonHeight={loginButtonHeight}
			buttonWidth={loginButtonWidth}
			fontSize={loginButtonFontSize}
			backgroundColor={loginButtonBackgroundColor}
			color={loginButtonColor}
		>
			<slot name="login-button-logo" slot="logo">
				<Logo height={loginButtonLogoHeight} width={loginButtonLogoWidth} />
			</slot>
			<slot name="login-button-body">
				<LoginButtonText />
			</slot>
		</LoginButton>
	{:else}
		<Modal {location} {avatarSize}>
			<div slot="avatar">
				{#if $$slots.default}
					<slot />
				{:else}
					<Avatar username={$userData.name} src={$userData.picture} size={avatarSize} />
				{/if}
			</div>

			<div class="othent-login othent-login-modal-children">
				<UserInfo userdata={$userData} avatarSize={userInfoAvatarSize} />
				<div class="text-center">
					<LogoutButton
						on:loggedOut={onLogout}
						{apiid}
						buttonHeight={logoutButtonHeight}
						buttonWidth={logoutButtonWidth}
						fontSize={logoutButtonFontSize}
						backgroundColor={logoutButtonBackgroundColor}
						color={logoutButtonColor}
					>
						<slot name="logout-button-body">Logout</slot>
					</LogoutButton>
				</div>
			</div>
		</Modal>
	{/if}
</div>
