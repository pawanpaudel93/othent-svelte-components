# Othent.io Svelte Components Library

![OthentLogin component](https://raw.githubusercontent.com/Othent/react-components/main/assets/screenshots/othent-login.png)

The Othent Svelte Components Library is a collection of Svelte components designed
to provide a seamless way for developers to integrate Othent into their Svelte
applications.

## Installation

To use the components in your Svelte project, you can install it using `npm`:

```sh
npm i othent-svelte-components
```

Using `yarn`:

```sh
yarn add othent-svelte-components
```

Or using `pnpm`:

```sh
pnpm add othent-svelte-components
```

## Usage

To use the components, you can import them directly into your project:

```svelte
import {OthentLogin} from 'othent-svelte-components';
```

And then add them inside your Svelte application:

```svelte
<OthentLogin apiid="YOUR_API_ID" />
```

### Props

The component accepts the following props:

- `apiid` (required): You need an API_ID to be able to initialize the othent library. You can get yours on [othent.io](othent.io).

Optional Props:

- `location` (default: "bottom"): The location where the modal should appear. It accepts one of the following values: "top", "right", "bottom", "left", "top-right", "top-left", "bottom-right", "bottom-left".
- `avatarSize` (default: "3em"): The size of the avatar displayed when the user is logged in.
- `userInfoAvatarSize` (default: "3em"): The size of the avatar displayed in the user info section.
- `loginButtonHeight` (default: "3em"): The height of the login button.
- `loginButtonWidth` (default: "fit-content"): The width of the login button.
- `loginButtonfontSize` (default: "medium"): The font size of the login button text.
- `loginButtonLogoHeight` (default: 24): The height of the logo displayed on the login button.
- `loginButtonLogoWidth` (default: 44): The width of the logo displayed on the login button.
- `logoutButtonHeight` (default: "100%"): The height of the logout button.
- `logoutButtonWidth` (default: "100%"): The width of the logout button.
- `logoutButtonfontSize` (default: "normal"): The font size of the logout button text.

### Slots

The OthentLogin component provides the following slots for customization:

- `login-button-logo`: Use this slot to replace the default logo on the login button. It accepts any valid Svelte component or HTML.
- `login-button-body`: Use this slot to replace the default text or content inside the login button.
- `logout-button-body`: Use this slot to replace the default text or content inside the logout button.

### Events

The Othent Login Component emits the following events:

- `login`: Dispatched when the user successfully logs in. The event detail contains the login response data.
- `logout`: Dispatched when the user logs out. The event detail contains the logout response data.

To handle these events, you can attach event listeners to the component:

```svelte
<OthentLogin apiid="YOUR_API_ID" on:login={handleLogin} on:logout={handleLogout} />
```

```svelte
<script lang="ts">
	function handleLogin(event) {
		const userData = event.detail;
		// Handle user login event
	}

	function handleLogout(event) {
		const logoutResponse = event.detail;
		// Handle user logout event
	}
</script>
```

### Example Usage

```svelte
<script lang="ts">
	import { OthentLogin } from 'othent-svelte-components';
	import type { LogInReturnProps, LogOutReturnProps } from 'othent';
	const API_ID = 'YOUR_API_ID';

	let width = 24;
	let height = 24;

	const onLogin = (event: CustomEvent<LogInReturnProps>) => {
		console.log(event.detail);
	};

	const onLogout = (event: CustomEvent<LogOutReturnProps>) => {
		console.log(event.detail);
	};
</script>

<div class="content">
	<OthentLogin
		apiid={API_ID}
		on:login={onLogin}
		on:logout={onLogout}
		loginButtonHeight="25px"
		loginButtonfontSize="14px"
		loginButtonLogoHeight={16}
		loginButtonLogoWidth={36}
		avatarSize="2.5em"
	>
		<svg
			slot="login-button-logo"
			class="othent-logo"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			{width}
			{height}
		>
			<path
				fill="#FFC107"
				d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
			/>
			<path
				fill="#FF3D00"
				d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
			/>
			<path
				fill="#4CAF50"
				d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
			/>
			<path
				fill="#1976D2"
				d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
			/>
		</svg>
	</OthentLogin>
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
```

In the example above, the OthentLogin component is used with customized settings and event handlers. The component emits the login and logout events, which are handled by the corresponding functions handleLogin and handleLogout. The component is also customized with different sizes and labels for the login and logout buttons.

Feel free to adjust the component's props, slots, and event handlers to fit your specific requirements.

> 💡 Despite the library is modular and you can use each component as you wish,
> the main component, `OthentLogin`, is probably all you need if don't need to
> customize the behaviour of the login flow.

## Documentation

For more information on how to use the Othent Svelte Components Library, please
see the official Othent documentation at
[https://docs.othent.io/developers/component-library](https://docs.othent.io/developers/component-library).

## Contact

If you have any questions or issues with the Othent Library, please contact
othent team at [hello@othent.io](mailto:hello@othent.io) or open an issue in
the GitHub repository.
