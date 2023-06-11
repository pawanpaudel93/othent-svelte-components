<script lang="ts">
  import './Logo.css';
  import { LOGO_HEIGHT, LOGO_WIDTH } from '$lib/constants';
  export let width = LOGO_WIDTH;
  export let height = LOGO_HEIGHT;
</script>

<svg
  {width}
  {height}
  viewBox={`0 0 ${width} ${height}`}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="othent-logo"
>
  <rect {width} {height} rx={height / 2} fill="#2375EF" />
  <circle cx={width - height / 2} cy={height / 2} r={(height / 2) * 0.93273} fill="#F7F7FA" />
</svg>
