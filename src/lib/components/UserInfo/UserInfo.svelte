<script lang="ts">
	import './UserInfo.css';
	import Avatar from '../Avatar';
	import type { LogInReturnProps } from 'othent';

	export let userdata: LogInReturnProps | null = null;
</script>

<div class="othent-user-info">
	<Avatar src={userdata?.picture} username={userdata?.name} />
	<div class="othent-user-info-details">
		<div class="othent-user-info-details-name">{userdata?.name}</div>
		<div class="othent-user-info-details-email">{userdata?.email}</div>
	</div>
</div>
