<script lang="ts">
	import { OthentLogin } from '../lib';
	import type { LogInReturnProps, LogOutReturnProps } from 'othent';
	const API_ID = import.meta.env.VITE_OTHENT_API_ID;

	const onLogin = (event: CustomEvent<LogInReturnProps>) => {
		console.log(event.detail);
	};

	const onLogout = (event: CustomEvent<LogOutReturnProps>) => {
		console.log(event.detail);
	};
</script>

<div class="content">
	<OthentLogin apiid={API_ID} on:login={onLogin} on:logout={onLogout} />
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
</style>
