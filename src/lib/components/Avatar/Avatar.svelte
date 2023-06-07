<script lang="ts">
	import { AVATAR_SIZE } from '$lib/constants';
	import './Avatar.css';

	export let username: string = '';
	export let src: string = '';
	export let size: string = AVATAR_SIZE;
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
		style={`width: ${size}; height: ${size};`}
		on:error={handleError}
		referrerpolicy="no-referrer"
		{...$$restProps}
	/>
{:else}
	<div class="othent-avatar" style={`width: ${size}; height: ${size};`}>
		{#if username}
			{username.charAt(0).toUpperCase()}
		{:else}
			&nbsp;
		{/if}
	</div>
{/if}
