<script lang="ts">
	import './UserInfo.css';
	import Avatar from '../Avatar';
	import type { LogInReturnProps } from 'othent';
	import { AVATAR_SIZE, USER_INFO_BACKGROUND_COLOR, USER_INFO_COLOR } from '$lib/constants';

	export let userdata: LogInReturnProps | null = null;
	export let avatarSize: string = AVATAR_SIZE;
	export let color: string = USER_INFO_COLOR;
	export let backgroundColor = USER_INFO_BACKGROUND_COLOR;
	let clazz: string = '';
	export let style: string = '';
	export { clazz as class };

	const userInfoStyle = `
		color: ${color};
		background: ${backgroundColor};
		${style}
	`;
</script>

<div class="othent-user-info {clazz}" style={userInfoStyle}>
	<Avatar src={userdata?.picture} username={userdata?.name} size={avatarSize} />
	<div class="othent-user-info-details">
		<div class="othent-user-info-details-name">{userdata?.name}</div>
		<div class="othent-user-info-details-email">{userdata?.email}</div>
	</div>
</div>
