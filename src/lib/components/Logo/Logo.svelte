<script lang="ts">
	import './Logo.css';
	export let width = 44;
	export let height = 24;
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
