<script lang="ts">
	import './Avatar.css';

	export let username = '';
	export let src = '';
	let error = false;

	function handleError() {
		error = true;
	}
</script>

{#if !error && src}
	<img
		{src}
		alt={`${username}'s avatar`}
		class="othent-avatar"
		on:error={handleError}
		referrerpolicy="no-referrer"
	/>
{:else}
	<div class="othent-avatar">
		{#if username}
			{username.charAt(0).toUpperCase()}
		{:else}
			&nbsp;
		{/if}
	</div>
{/if}
