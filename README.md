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

## Components

To use the components, Import the component in your script and Use the component:

```svelte
<script lang="ts">
 import OthentLogin from 'othent-svelte-components';
</script>

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
- `loginButtonBackgroundColor` (default: #fff): The background color of the login button
- `loginButtonLogoWidth` (default: 44): The width of the logo displayed on the login button.
- `logoutButtonHeight` (default: "100%"): The height of the logout button.
- `logoutButtonWidth` (default: "100%"): The width of the logout button.
- `logoutButtonfontSize` (default: "normal"): The font size of the logout button text.
- `logoutButtonBackgroundColor` (default: #fff): The background color of the logout button

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

### LoginButton

The `LoginButton` component is a customizable login button built with Svelte. It provides a simple interface for users to log in to your application using the Othent authentication service.

Import the component in your script and use it:

```svelte
<script lang="ts">
 import { LoginButton } from 'othent-svelte-components';
</script>

<LoginButton apiid="YOUR_API_ID" />
```

#### LoginButton Props

The `LoginButton` component accepts the following props:

- `apiid` (required): The API ID provided by the Othent authentication service. You need to obtain this ID by signing up for an Othent account.

Optional Props:

- `buttonHeight` (default: "3em"): The height of the login button.
- `buttonWidth` (default: "fit-content"): The width of the login button.
- `fontSize` (default: "medium"): The font size of the login button text.
- `logoHeight` (default: 24): The height of the logo displayed on the login button.
- `logoWidth` (default: 44): The width of the logo displayed on the login button.
- `backgroundColor` (default: #fff): The background color of the login button

#### LoginButton Slots

The `LoginButton` component provides the following slots for customization:

- `logo`: Use this slot to replace the default logo on the login button. It accepts any valid Svelte component or HTML.
- `Default Slot`: Use this slot to replace the default text or content inside the login button.

#### LoginButton Events

The LoginButton component emits the following event:

- `login`: This event is triggered when the user successfully logs in. The event payload includes the user data.

#### LoginButton Example Usage

```svelte
<script>
 import { LoginButton } from 'othent-svelte-components';

 function handleLogin(event) {
  const userData = event.detail;
  // Handle user login event
 }
</script>

<LoginButton apiid="YOUR_API_ID" on:login={handleLogin}>
 <span>Login with Othent</span>
</LoginButton>
```

### LogoutButton

The `LogoutButton` component is a customizable logout button built with Svelte. It allows users to log out of your application using the Othent authentication service.

Import the component in your script and use it:

```svelte
<script lang="ts">
 import { LogoutButton } from 'othent-svelte-components';
</script>

<LogoutButton apiid="YOUR_API_ID" />
```

#### LogoutButton Props

The `LogoutButton` component accepts the following props:

- `apiid` (required): The API ID provided by the Othent authentication service. You need to obtain this ID by signing up for an Othent account.

Optional Props:

- `buttonHeight` (default: "100%"): The height of the logout button.
- `buttonWidth` (default: "100%"): The width of the logout button.
- `fontSize` (default: "normal"): The font size of the logout button text.
- `backgroundColor` (default: #f44336): The background color of the logout button

#### LogoutButton Slots

The LogoutButton component provides the following slot for customization:

- `Default Slot`: Use this slot to replace the default text or content inside the logout button.

#### LogoutButton Events

The LogoutButton component emits the following event:

- `logout`: This event is triggered when the user successfully logs out. The event payload includes the logout response.

#### LogoutButton Example Usage

```svelte
<script>
 import { LogoutButton } from 'othent-svelte-components';

 function handleLogout(event) {
  const logoutResponse = event.detail;
  // Handle user logout event
 }
</script>

<LogoutButton
 apiid="YOUR_API_ID"
 on:logout={handleLogout}
 buttonHeight="48px"
 buttonWidth="180px"
 fontSize="18px"
>
 <span>Sign Out</span>
</LogoutButton>
```

### Avatar

The `Avatar` component is a simple and customizable avatar image or placeholder built with Svelte. It is commonly used to display user profile pictures or initials.

Import the component in your script and use it:

```svelte
<script lang="ts">
 import { Avatar } from 'othent-svelte-components';
</script>

<Avatar username="John Doe" src="path/to/avatar.jpg" size="50px" />
```

#### Avatar Props

The `Avatar` component accepts the following props:

- `username` (optional): The username or initials to be displayed in the avatar if no image source (src) is provided.
- `src` (optional): The URL or path to the image file to be displayed as the avatar.
- `size` (default: "3em"): The size of the avatar. You can specify the size using CSS units (e.g., "px", "rem", "%").

#### Avatar Example Usage

```svelte
<script>
 import { Avatar } from 'othent-svelte-components';
</script>

<Avatar username="John Doe" src="path/to/avatar.jpg" size="50px" />
```

### UserInfo

This is a basic component to show info from a user. It shows the profile picture using the Avatar component on the left, while on the right it shows the user's name above the user's email.

Import the component in your script and use it:

```svelte
<script lang="ts">
 import { UserInfo } from 'othent-svelte-components';
</script>

<UserInfo userdata={userData} avatarSize="80px" />
```

#### UserInfo Props

The UserInfo component accepts the following props:

- `userdata`: An object containing the user's information, typically obtained from a login or user profile API call. It should have the following properties:

  -`name`: The user's name or display name. -`email`: The user's email address. -`picture`: The URL or path to the user's avatar image.

- `avatarSize` (default: "3em"): The size of the avatar displayed in the component. You can specify the size using CSS units (e.g., "px", "rem", "%").

#### UserInfo Example Usage

```svelte
<script>
 import { UserInfo } from 'othent-svelte-components';

 const userData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  picture: 'path/to/avatar.jpg'
 };
</script>

<UserInfo userdata={userData} avatarSize="80px" />
```

### Modal

This is a simple component to display a parent element that, upon being clicked, shows a Modal element containing children. This Modal is placed in a location relative to the parent element, with 9 possible positions defined by the ModalLocation enum.

Import the component in your script and use it:

```svelte
<script lang="ts">
 import { Modal } from 'othent-svelte-components';
</script>

<Modal location="bottom-right" avatarSize="40px">
 <div slot="avatar">Avatar Content</div>
 <div slot="default">Modal Content</div>
</Modal>
```

#### Modal Props

The `Modal` component accepts the following props:

- `location` (default: "bottom"): The position of the modal relative to the trigger element. It can be one of the following values:

  - "top"
  - "right"
  - "bottom"
  - "left"
  - "top-right"
  - "top-left"
  - "bottom-right"
  - "bottom-left"

- `avatarSize` (default: "3em"): The size of the trigger element that activates the modal. You can specify the size using CSS units (e.g., "px", "rem", "%").

#### Modal Slots

The Modal component supports the following slots:

- `avatar` (optional): The content to be displayed inside the trigger element that activates the modal.
- `default`: The content to be displayed inside the modal.

#### Modal Example Usage

```svelte
<script>
 import { Modal, ModalLocation } from 'othent-svelte-components';
</script>

<Modal location={ModalLocation.bottom} avatarSize="40px">
 <span slot="avatar">PP</span>
 <div>Modal Content</div>
</Modal>
```

## Contact

If you have any questions or issues with the Othent Library, please contact
othent team at [hello@othent.io](mailto:hello@othent.io) or open an issue in
the GitHub repository.
