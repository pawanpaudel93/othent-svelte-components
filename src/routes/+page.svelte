<script>
	import { OthentLogin } from '../lib';
	const API_ID = import.meta.env.VITE_OTHENT_API_ID;

	const onLogin = (event) => {
		console.log(event.detail);
	};

	const onLogout = (event) => {
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
		margin-top: 20px;
	}
</style>
