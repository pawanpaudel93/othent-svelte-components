<script lang="ts">
  import './UserInfo.css';
  import Avatar from '../Avatar';
  import type { LogInReturnProps } from 'othent';
  import { AVATAR_SIZE } from '$lib/constants';

  export let userdata: LogInReturnProps | null = null;
  export let avatarSize: string = AVATAR_SIZE;
  let clazz = '';
  export let style = '';
  export { clazz as class };
</script>

<div class="othent-user-info {clazz}" {style}>
  <Avatar src={userdata?.picture} username={userdata?.name} size={avatarSize} />
  <div class="othent-user-info-details">
    <div class="othent-user-info-details-name">{userdata?.name}</div>
    <div class="othent-user-info-details-email">{userdata?.email}</div>
  </div>
</div>
