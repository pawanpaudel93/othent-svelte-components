<script lang="ts">
  import { OthentLogin } from '../lib';
  import type { LogInReturnProps, LogOutReturnProps } from 'othent';
  const API_ID = import.meta.env.VITE_OTHENT_API_ID;

  let width = 24;
  let height = 24;
  let darkMode = false;

  const onLogin = (event: CustomEvent<LogInReturnProps>) => {
    console.log(event.detail);
  };

  const onLogout = (event: CustomEvent<LogOutReturnProps>) => {
    console.log(event.detail);
  };
</script>

<div class="content">
  <div style="display:flex; gap: 10px;">
    <OthentLogin
      apiid={API_ID}
      on:loggedIn={onLogin}
      on:loggedOut={onLogout}
      loginButtonHeight="25px"
      loginButtonFontSize="14px"
      loginButtonLogoHeight={16}
      loginButtonLogoWidth={36}
      avatarSize="2.5em"
      logoutButtonColor="#00a3c4"
      bind:darkMode
    >
      <svg
        slot="login-button-logo"
        class="othent-logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        {width}
        {height}
        ><path
          fill="#FFC107"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        /><path
          fill="#FF3D00"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        /><path
          fill="#4CAF50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        /><path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        /></svg
      >
    </OthentLogin>
    <button on:click={() => (darkMode = !darkMode)} type="button" style="cursor: pointer;"
      >Dark Mode {darkMode === true ? 'ON' : 'OFF'}</button
    >
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0px 20px;
    background-color: #f3f3f3;
  }

  .content {
    position: absolute;
    right: 120px;
    top: 20px;
  }

  .othent-logo {
    background-color: transparent;
    margin-right: 0.5rem;
  }
</style>
