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

```ts
import { OthentLogin } from 'othent-svelte-components';
```

And then add them inside your Svelte application:

```ts
<OthentLogin apiid={apiid} />
```

### Props

The component accepts the following props:

- `apiid` (required): The API identifier used for authentication.
- `location` (optional): The desired location of the modal. It accepts one of the following values: top, right, bottom, left, top-right, top-left, bottom-right, or bottom-left. If not provided, the default location is bottom.

### Events

The Othent Login Component emits the following events:

- `login`: Dispatched when the user successfully logs in. The event detail contains the login response data.
- `logout`: Dispatched when the user logs out. The event detail contains the logout response data.

To handle these events, you can attach event listeners to the component:

```ts
<OthentLogin {apiid} on:login={handleLogin} on:logout={handleLogout} />
```

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
