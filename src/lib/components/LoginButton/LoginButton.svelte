<script lang="ts">
  import './LoginButton.css';
  import Logo from '../Logo';
  import LoginButtonText from '../Extras/LoginButtonText.svelte';
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
  import { isLoading } from '$lib/stores';
  import { othentLogin } from '$lib/utils';
  import Spinner from '../Extras/Spinner.svelte';

  export let apiid: string;
  export let buttonHeight: string = LOGIN_BUTTON_HEIGHT;
  export let buttonWidth: string = LOGIN_BUTTON_WIDTH;
  export let fontSize: string = LOGIN_BUTTON_FONT_SIZE;
  export let logoHeight: number = LOGO_HEIGHT;
  export let logoWidth: number = LOGO_WIDTH;
  export let backgroundColor: string = LOGIN_BUTTON_BACKGROUND_COLOR;
  export let color: string = LOGIN_BUTTON_COLOR;
  let clazz = '';
  export let style = '';
  export { clazz as class };

  const dispatch = createEventDispatcher();

  async function login() {
    $isLoading = true;
    try {
      const loginResponse = await othentLogin(apiid);
      dispatch('loggedIn', loginResponse);
    } catch (error) {
      console.error('othent.login() failed:', error);
    } finally {
      $isLoading = false;
    }
  }
</script>

<button
  class="othent-button-login {clazz}"
  disabled={$isLoading}
  on:click={login}
  style={`
		width: ${buttonWidth};
		height: ${buttonHeight};
		font-size: ${fontSize};
		background-color: ${backgroundColor};
		color: ${color};
		${style}
	`}
  {...$$restProps}
>
  {#if $isLoading}
    <Spinner size={`calc(${buttonHeight} - 10px)`} style="margin-right: 0.5em;" />
  {:else}
    <slot name="logo"><Logo height={logoHeight} width={logoWidth} /></slot>
  {/if}

  {#if $$slots.default}
    <slot />
  {:else}
    <LoginButtonText />
  {/if}
</button>
