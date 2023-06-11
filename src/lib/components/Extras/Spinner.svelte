<script lang="ts">
  export let size = '20px';
  export let style = '';
  let clazz = '';
  export { clazz as class };

  let spinnerStyle = `
		width: ${size};
		height: ${size};
		${style}
	`;
</script>

<div class="loading-container">
  <div class="loading-spinner {clazz}" style={spinnerStyle} />
</div>

<style>
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .loading-spinner {
    border: 3px solid #f3f3f3; /* Light gray */
    border-top: 3px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
